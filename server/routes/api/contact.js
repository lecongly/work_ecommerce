const express = require('express');
const router = express.Router();

// Bring in Models & Helpers
const Contact = require('../../models/contact');
const mailgun = require('../../services/mailgun');

router.post('/add', async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    if (!email) {
      return res
        .status(400)
        .json({ error: 'Bạn phải nhập địa chỉ email.' });
    }

    if (!name) {
      return res
        .status(400)
        .json({ error: 'Bạn phải nhập mô tả & tên. ' });
    }

    if (!message) {
      return res.status(400).json({ error: 'Bạn phải nhập một tin nhắn.' });
    }

    const existingContact = await Contact.findOne({ email });

    if (existingContact) {
      return res
        .status(400)
        .json({ error: 'Một yêu cầu đã tồn tại cho cùng một địa chỉ email. ' });
    }

    const contact = new Contact({
      name,
      email,
      message
    });

    const contactDoc = await contact.save();

    await mailgun.sendEmail(email, 'contact');

    res.status(200).json({
      success: true,
      message: `Chúng tôi đã nhận được tin nhắn của bạn, chúng tôi sẽ liên hệ với bạn qua địa chỉ email của bạn ${email}!`,
      contact: contactDoc
    });
  } catch (error) {
    return res.status(400).json({
      error: 'Yêu cầu của bạn không thể xử lý. Vui lòng thử lại.'
    });
  }
});

module.exports = router;
