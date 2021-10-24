const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const logSchema = new Schema({
  twitterId: {
    type: String,
    required: false,
  },
  displayName: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {type: String, required: false},
  plaidAccessToken: {type: String, required:false},
  totalTransactions: {type: Number, required:false},
  consumerKey: {type: String, required: false},
  consumerKeySecret: {type: String, required:false},
  accessKey: {type: String, required: false},
  accessKeySecret: {type: String, required:false},
  message: {type: String, required:false},
  budget: {type: Number, required:false}
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
