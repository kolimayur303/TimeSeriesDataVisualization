// models/timeseriesModel.js
const mongoose = require('mongoose');

const timeSeriesSchema = new mongoose.Schema({
  variable1: Number,
  variable2: Number,
  variable3: Number,
  variable4: Number,
  variable5: Number,
  variable6: Number,
  variable7: Number,
  variable8: Number,
  variable9: Number,
  variable10: Number,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const TimeSeries = mongoose.model('TimeSeries', timeSeriesSchema);

module.exports = TimeSeries;
