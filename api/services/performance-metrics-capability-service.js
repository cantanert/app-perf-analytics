const Metric = require('../models/metric');
const Messages = require('../../enums/messages');

const badRequestResponse = (res) => {
  res.status(400).json({
    message: Messages.REQUEST_BODY_CANNOT_BE_EMPTY
  })
}

const sendAnalytics = (req, res) => {
  const params = typeof req.body === 'string'
    ? JSON.parse(req.body)
    : req.body;

  if(Object.keys(params).length){

    const {
      FCP,
      TTFB,
      DOM_LOAD,
      WINDOW_LOAD,
      RESOURCES,
      dateInfo
    } = params;

    if(
      TTFB === null || TTFB === undefined
      || FCP === null || FCP === undefined
      || DOM_LOAD == null || DOM_LOAD == undefined
      || WINDOW_LOAD === null || WINDOW_LOAD === undefined
      || RESOURCES == null || RESOURCES == undefined
      || dateInfo === null || dateInfo === undefined
    ){
      badRequestResponse(res);
    } else if(
      typeof TTFB !== "number"
      || typeof FCP !== "number"
      || typeof WINDOW_LOAD !== "number"
      || typeof DOM_LOAD !== "number"
      || typeof dateInfo !== "string"
    ){
      console.log('deb');
      badRequestResponse(res);
    } else {
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
        .catch((err) => {
          badRequestResponse(res);
        });
    }
  } else {
    res.status(400).json({
      message: Messages.REQUEST_BODY_CANNOT_BE_EMPTY
    });
  }
}

module.exports = {sendAnalytics}