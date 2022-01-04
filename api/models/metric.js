const mongoose = require('mongoose');

const metricSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Metric', metricSchema);
