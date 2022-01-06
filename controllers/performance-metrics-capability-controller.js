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




module.exports = {getMetrics, getByPostMetrics}