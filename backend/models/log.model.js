const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const logSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;