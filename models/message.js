const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: {type: String, required: true, maxLength: 500},
  user: {type: String, required: true, maxLength: 100},
  added: {type: Date},
});

module.exports = mongoose.model('Message', MessageSchema);