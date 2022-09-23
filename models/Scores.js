const mongoose = require('mongoose');

const scoresSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  MDL: {
    type: Number,
  },
  SPT: {
    type: Number,
  },
  HRP: {
    type: Number,
  },
  SDC: {
    type: String,
  },
  PLK: {
    type: String,
  },
  TMR: {
    type: String,
  },
  pass: {
    type: Boolean,
  },
});

module.exports = mongoose.model('scores', scoresSchema);
