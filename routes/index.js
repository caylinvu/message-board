const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const asyncHandler = require('express-async-handler');

const messages = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

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

  // messages.push({text: req.body.message, user: req.body.name, added: new Date()});

  res.redirect('/');
}));

module.exports = router;
