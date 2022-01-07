const Messages = require('../../enums/messages');
const Metric = require('../models/metric');

const getMetrics = (req, res) => {
  const currentDate = new Date();
  const halfHourAgo = new Date(currentDate.getTime() - 30*60000);

  Metric
    .find({date: { $gte: halfHourAgo }})
    .exec()
    .then((source) => {
      res.status(200).json({
        statistics: source,
        utcFromDate: halfHourAgo,
        utcToDate: new Date(),
      })
    })
}

const getByPostMetrics = (req, res) => {
  const params = typeof req.body === 'string'
    ? JSON.parse(req.body)
    : req.body;

  const {startDate, endDate} = params;

  if (startDate === null || startDate === undefined || endDate === null || endDate === undefined){
    res.status(400).json({
      message: Messages.START_AND_END_DATE_MUST_BE_VALID
    });
  } else if (Date.parse(startDate) > Date.parse(endDate)){
    res.status(400).json({
      message: Messages.END_DATE_MUST_BE_LATER_THAN_START
    });
  } else if(Date.parse(endDate) > Date.parse(new Date())){
    res.status(400).json({
      message: Messages.END_DATE_CANNOT_BE_BEFORE_NOW
    });
  } else {
    Metric
      .find({date: { $gte: startDate, $lte: endDate }})
      .exec()
      .then((source) => {
        res.status(200).json({
          statistics: source,
          utcFromDate: startDate,
          utcToDate: endDate,
        })
      })
  }
}




module.exports = {getMetrics, getByPostMetrics}