const Messages = require('../../enums/messages');
const Metric = require('../models/metric');
const BadRequestHandler = require('../errors/bad-request-handler');

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
    }).catch(() => {
    BadRequestHandler(res, Messages.SOMETHING_WENT_WRONG)
  })
}

const isStartDateAfterEndDay = (startDate, endDate) => {
  return Date.parse(startDate) > Date.parse(endDate);
}

const isStartDateAfterToday = (startDate, endDate) => {
  return Date.parse(endDate) > Date.parse(new Date());
}

const getByPostMetrics = (req, res) => {
  const {startDate, endDate} = req.body;

  if (isStartDateAfterEndDay(startDate, endDate)) {

    BadRequestHandler(res, Messages.END_DATE_MUST_BE_LATER_THAN_START)

  } else if (isStartDateAfterToday(startDate, endDate)) {

    BadRequestHandler(res, Messages.END_DATE_CANNOT_BE_BEFORE_NOW)

  } else {
    Metric
      .find({date: {$gte: startDate, $lte: endDate}})
      .exec()
      .then((source) => {
        res.status(200).json({
          statistics: source,
          utcFromDate: startDate,
          utcToDate: endDate,
        })
      })
      .catch(() => {
        BadRequestHandler(res, Messages.SOMETHING_WENT_WRONG);
      });
  }
}




module.exports = {getMetrics, getByPostMetrics}