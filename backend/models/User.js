const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
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
})

module.exports = mongoose.model('User', UserSchema)