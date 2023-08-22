const express = require('express');
const router = express.Router();

// Bring in Models & Helpers
const Address = require('../../models/address');
const auth = require('../../middleware/auth');

// add address api
router.post('/add', auth, async (req, res) => {
  try {
    const user = req.user;

    const address = new Address({
      ...req.body,
      user: user._id
    });
    const addressDoc = await address.save();

    res.status(200).json({
      success: true,
      message: `Địa chỉ đã được thêm thành công!`,
      address: addressDoc
    });
  } catch (error) {
    res.status(400).json({
      error: 'Yêu cầu của bạn không thể xử lý. Vui lòng thử lại.'
    });
  }
});

// fetch all addresses api
router.get('/', auth, async (req, res) => {
  try {
    const addresses = await Address.find({ user: req.user._id });

    res.status(200).json({
      addresses
    });
  } catch (error) {
    res.status(400).json({
      error: 'Yêu cầu của bạn không thể xử lý. Vui lòng thử lại.'
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const addressId = req.params.id;

    const addressDoc = await Address.findOne({ _id: addressId });

    if (!addressDoc) {
      res.status(404).json({
        message: `Không thể tìm thấy Địa chỉ với id: ${addressId}.`
      });
    }

    res.status(200).json({
      address: addressDoc
    });
  } catch (error) {
    res.status(400).json({
      error: 'Yêu cầu của bạn không thể xử lý. Vui lòng thử lại'
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const addressId = req.params.id;
    const update = req.body;
    const query = { _id: addressId };

    await Address.findOneAndUpdate(query, update, {
      new: true
    });

    res.status(200).json({
      success: true,
      message: 'Địa chỉ đã được cập nhật thành công!'
    });
  } catch (error) {
    res.status(400).json({
      error: 'Yêu cầu của bạn không thể xử lý. Vui lòng thử lại'
    });
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const address = await Address.deleteOne({ _id: req.params.id });

    res.status(200).json({
      success: true,
      message: `Địa chỉ đã được xóa thành công!`,
      address
    });
  } catch (error) {
    res.status(400).json({
      error: 'Yêu cầu của bạn không thể xử lý. Vui lòng thử lại'
    });
  }
});

module.exports = router;
