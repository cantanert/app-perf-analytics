const Metric = require('../api/models/metric');

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
  if (Date.parse(startDate) > Date.parse(endDate)){
    res.status(400).json({
      message: "ERROR : End date must be after start date."
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