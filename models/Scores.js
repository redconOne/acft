const mongoose = require('mongoose');

const scoresSchema = new mongoose.Schema({
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
    type: Number,
  },
  PLK: {
    type: String,
  },
  TMR: {
    type: String,
  },
});

module.exports = mongoose.model('scores', scoresSchema);
