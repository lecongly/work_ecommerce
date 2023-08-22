const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const passport = require('passport');

const auth = require('../../middleware/auth');

// Bring in Models & Helpers
const User = require('../../models/user');
const mailchimp = require('../../services/mailchimp');
const mailgun = require('../../services/mailgun');
const keys = require('../../config/keys');
const { EMAIL_PROVIDER } = require('../../constants');

const { secret, tokenLife } = keys.jwt;

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ error: 'Bạn phải nhập địa chỉ email.' });
    }

    if (!password) {
      return res.status(400).json({ error: 'Bạn phải nhập mật khẩu.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .send({ error: 'Không tìm thấy người dùng nào cho địa chỉ email này.' });
    }

    if (user && user.provider !== EMAIL_PROVIDER.Email) {
      return res.status(400).send({
        error: `Địa chỉ email đó đã được sử dụng bằng nhà cung cấp ${user.provider} .`
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        error: 'Mật khẩu không đúng'
      });
    }

    const payload = {
      id: user.id
    };

    const token = jwt.sign(payload, secret, { expiresIn: tokenLife });

    if (!token) {
      throw new Error();
    }

    res.status(200).json({
      success: true,
      token: `Bearer ${token}`,
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    res.status(400).json({
      error: 'Yêu cầu của bạn không thể xử lý. Vui lòng thử lại.'
    });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { email, firstName, lastName, password, isSubscribed } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ error: 'Bạn phải nhập địa chỉ email.' });
    }

    if (!firstName || !lastName) {
      return res.status(400).json({ error: 'Bạn phải nhập tên đầy đủ của bạn.' });
    }

    if (!password) {
      return res.status(400).json({ error: 'Bạn phải nhập mật khẩu.' });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: 'Địa chỉ email đó đã được sử dụng.' });
    }

    let subscribed = false;
    if (isSubscribed) {
      const result = await mailchimp.subscribeToNewsletter(email);

      if (result.status === 'subscribed') {
        subscribed = true;
      }
    }

    const user = new User({
      email,
      password,
      firstName,
      lastName
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
    const registeredUser = await user.save();

    const payload = {
      id: registeredUser.id
    };

    await mailgun.sendEmail(
      registeredUser.email,
      'signup',
      null,
      registeredUser
    );

    const token = jwt.sign(payload, secret, { expiresIn: tokenLife });

    res.status(200).json({
      success: true,
      subscribed,
      token: `Bearer ${token}`,
      user: {
        id: registeredUser.id,
        firstName: registeredUser.firstName,
        lastName: registeredUser.lastName,
        email: registeredUser.email,
        role: registeredUser.role
      }
    });
  } catch (error) {
    res.status(400).json({
      error: 'Yêu cầu của bạn không thể xử lý. Vui lòng thử lại.'
    });
  }
});

router.post('/forgot', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res
        .status(400)
        .json({ error: 'Bạn phải nhập địa chỉ email.' });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res
        .status(400)
        .send({ error: 'Không tìm thấy người dùng nào cho địa chỉ email này.' });
    }

    const buffer = crypto.randomBytes(48);
    const resetToken = buffer.toString('hex');

    existingUser.resetPasswordToken = resetToken;
    existingUser.resetPasswordExpires = Date.now() + 3600000;

    existingUser.save();

    await mailgun.sendEmail(
      existingUser.email,
      'reset',
      req.headers.host,
      resetToken
    );

    res.status(200).json({
      success: true,
      message: 'Vui lòng kiểm tra email của bạn để tìm liên kết để đặt lại mật khẩu của bạn.'
    });
  } catch (error) {
    res.status(400).json({
      error: 'Yêu cầu của bạn không thể xử lý. Vui lòng thử lại.'
    });
  }
});

router.post('/reset/:token', async (req, res) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ error: 'Bạn phải nhập mật khẩu.' });
    }

    const resetUser = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!resetUser) {
      return res.status(400).json({
        error:
          'Mã thông báo của bạn đã hết hạn. Vui lòng thử đặt lại mật khẩu của bạn một lần nữa.'
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    resetUser.password = hash;
    resetUser.resetPasswordToken = undefined;
    resetUser.resetPasswordExpires = undefined;

    resetUser.save();

    await mailgun.sendEmail(resetUser.email, 'reset-confirmation');

    res.status(200).json({
      success: true,
      message:
        'Mật khẩu đã thay đổi thành công. Vui lòng đăng nhập bằng mật khẩu mới của bạn.'
    });
  } catch (error) {
    res.status(400).json({
      error: 'Yêu cầu của bạn không thể xử lý. Vui lòng thử lại.'
    });
  }
});

router.post('/reset', auth, async (req, res) => {
  try {
    const { password, confirmPassword } = req.body;
    const email = req.user.email;

    if (!email) {
      return res.status(401).send('Unauthenticated');
    }

    if (!password) {
      return res.status(400).json({ error: 'Bạn phải nhập mật khẩu.' });
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res
        .status(400)
        .json({ error: 'Địa chỉ email đó đã được sử dụng.' });
    }

    const isMatch = await bcrypt.compare(password, existingUser.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ error: 'Vui lòng nhập đúng mật khẩu cũ của bạn.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(confirmPassword, salt);
    existingUser.password = hash;
    existingUser.save();

    await mailgun.sendEmail(existingUser.email, 'reset-confirmation');

    res.status(200).json({
      success: true,
      message:
        'Mật khẩu đã thay đổi thành công. Vui lòng đăng nhập bằng mật khẩu mới của bạn.'
    });
  } catch (error) {
    res.status(400).json({
      error: 'Yêu cầu của bạn không thể xử lý. Vui lòng thử lại.'
    });
  }
});

router.get(
  '/google',
  passport.authenticate('google', {
    session: false,
    scope: ['profile', 'email'],
    accessType: 'offline',
    approvalPrompt: 'force'
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login',
    session: false
  }),
  (req, res) => {
    const payload = {
      id: req.user.id
    };

    jwt.sign(payload, secret, { expiresIn: tokenLife }, (err, token) => {
      const jwtToken = `Bearer ${token}`;

      const htmlWithEmbeddedJWT = `
    <html>
      <script>
        window.localStorage.setItem('token', '${jwtToken}');
        window.location.href = '/auth/success';
      </script>
    </html>       
    `;

      res.send(htmlWithEmbeddedJWT);
    });
  }
);

router.get(
  '/facebook',
  passport.authenticate('facebook', {
    session: false,
    scope: ['public_profile', 'email']
  })
);

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/',
    session: false
  }),
  (req, res) => {
    const payload = {
      id: req.user.id
    };

    jwt.sign(payload, secret, { expiresIn: tokenLife }, (err, token) => {
      const jwtToken = `Bearer ${token}`;

      const htmlWithEmbeddedJWT = `
    <html>
      <script>
        window.localStorage.setItem('token', '${jwtToken}');
        window.location.href = '/auth/success';
      </script>
    </html>       
    `;

      res.send(htmlWithEmbeddedJWT);
    });
  }
);

module.exports = router;
