const Metric = require('../models/metric');
const Messages = require('../../enums/messages');

const badRequestResponse = (res, errorMessage) => {
  res.status(400).json({
    message: errorMessage
  })
}

const isParamNullishInvalid = (params) => {
  const paramsArray = [
    params.FCP,
    params.TTFB,
    params.DOM_LOAD,
    params.WINDOW_LOAD,
    params.RESOURCES,
    params.dateInfo,
  ]
  paramsArray.every((item) => {
    return !(item === null || item === undefined);
  });
}

const isParamTypesInvalid = (params) => {
  const {FCP, TTFB, DOM_LOAD, WINDOW_LOAD, RESOURCES, dateInfo} = params;

  return typeof TTFB !== "number"
  || typeof FCP !== "number"
  || typeof WINDOW_LOAD !== "number"
  || typeof DOM_LOAD !== "number"
  || typeof dateInfo !== "string"
  || !(RESOURCES instanceof Array)
}

const sendAnalytics = (req, res) => {
  const params = typeof req.body === 'string'
    ? JSON.parse(req.body)
    : req.body;

  if(Object.keys(params).length){

    if(isParamNullishInvalid(params)){
      badRequestResponse(res, Messages.PARAMS_CANNOT_BE_NULLISH);
    } else if (isParamTypesInvalid(params)){
      badRequestResponse(res, Messages.PARAM_TYPES_ERROR);
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
        .catch(() => {
          badRequestResponse(res, Messages.SOMETHING_WENT_WRONG);
        });
    }
  } else {
    badRequestResponse(res, Messages.REQUEST_BODY_CANNOT_BE_EMPTY);
  }
}

module.exports = {sendAnalytics}