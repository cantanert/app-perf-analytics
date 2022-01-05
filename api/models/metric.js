const mongoose = require('mongoose');

const metricSchema = mongoose.Schema({
  ttfb: {
    type: Number,
    required: true
  },
  fcp: {
    type: Number,
    required: true
  },
  domLoad: {
    type: Number,
    required: true
  },
  windowLoad: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Metric', metricSchema);
