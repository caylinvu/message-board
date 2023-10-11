const express = require('express');
const router = express.Router();

const messages = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.message, user: req.body.name, added: new Date()});
  res.redirect('/');
});

module.exports = router;
