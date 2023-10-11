const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const asyncHandler = require('express-async-handler');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const allMessages = await Message.find().exec();
  res.render('index', { title: 'Mini Messageboard', messages: allMessages });
}));

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', asyncHandler(async (req, res, next) => {
  const message = new Message({
    text: req.body.message,
    user: req.body.name,
    added: new Date(),
  });

  await message.save();
  res.redirect('/');
}));

module.exports = router;
