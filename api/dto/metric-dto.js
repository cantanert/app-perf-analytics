const yup = require('yup');

module.exports = yup.object().shape({
  FCP: yup.string().required(),
  TTFB: yup.string().required(),
  DOM_LOAD: yup.string().required(),
  WINDOW_LOAD: yup.string().required(),
  RESOURCES: yup.array(),
  dateInfo: yup.string().required()
});