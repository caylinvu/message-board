const express = require('express');
const router = express.Router();
const { DateTime } = require('luxon');

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.message, user: req.body.name, added: DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)});
  res.redirect('/');
});

module.exports = router;
