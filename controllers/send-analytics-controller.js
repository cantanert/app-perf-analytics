const Metric = require('../api/models/metric');

const sendAnalytics = (req, res) => {
  const params = typeof req.body === 'string'
    ? JSON.parse(req.body)
    : req.body;

  const metric = new Metric({
    ttfb: params.TTFB,
    fcp: params.FCP,
    domLoad: params.DOM_LOAD,
    windowLoad: params.WINDOW_LOAD,
    date: params.dateInfo
  });

  metric.save()
    .then((result) => {
      res.status(201).json({
        message: "Metric successfully saved!",
        savedMetric: {
          ttfb: result.ttfb,
          fcp: result.fcp,
          domLoad: result.domLoad,
          windowLoad: result.windowLoad,
          date: result.date,
          id: result._id
        },
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err
      })
    });
}

module.exports = {sendAnalytics}