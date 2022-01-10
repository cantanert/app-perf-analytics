const Metric = require('../models/metric');
const Messages = require('../../enums/messages');
const BadRequestHandler = require('../errors/bad-request-handler');


const sendAnalytics = (req, res) => {
  const params = req.body;

  const metric = new Metric({
    ttfb: params.TTFB,
    fcp: params.FCP,
    domLoad: params.DOM_LOAD,
    windowLoad: params.WINDOW_LOAD,
    resources: params.RESOURCES,
    date: params.dateInfo
  });

  metric.save()
    .then((result) => {
      res.status(201).json({
        message: Messages.METRIC_SUCCESSFULLY_SAVED,
        savedMetric: {
          ttfb: result.ttfb,
          fcp: result.fcp,
          domLoad: result.domLoad,
          windowLoad: result.windowLoad,
          resources: result.resources,
          date: result.date,
          id: result._id
        },
      });
    })
    .catch(() => {
      BadRequestHandler(res, Messages.SOMETHING_WENT_WRONG);
    });
}

module.exports = {sendAnalytics}