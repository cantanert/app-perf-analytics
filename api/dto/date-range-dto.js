const yup = require('yup');

module.exports = yup.object().shape({
    startDate: yup.string().required(),
    endDate: yup.string().required(),
});