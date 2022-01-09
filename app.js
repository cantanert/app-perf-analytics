require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

async function main() {
  await mongoose.connect(`mongodb+srv://${process.env.MONGO_ATLAS_USERNAME}:${process.env.MONGO_ATLAS_PASSWORD}@${process.env.MONGO_ATLAS_ADDRESS}`);
}

main()
  .then(console.log("Successfuly connected to DB"))
  .catch(err => console.log("DB connection error : ",err));



const dashboardClientController = require('./api/controllers/dashboard-client-service');
const dataProviderClientController = require('./api/controllers/data-provier-client-service');
const perfAnalyticsLibController = require('./api/controllers/perf-analytics-lib-service');
const apiController = require('./api/controllers/api');
const internalServerErrorController = require('./api/services/internal-server-error-service')
const notFoundController = require('./api/services/not-found-service')

process.env.NODE_ENV !== "test" && app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(express.static(`${__dirname}/packages/app-perf-analytics-dashboard-client/build`));
app.use('/', dashboardClientController);

app.use(express.static(`${__dirname}/packages/app-perf-analytics-data-provider-client/build`));
app.use('/data-provider-client', dataProviderClientController);

app.use('/perf-analytics-lib.js',perfAnalyticsLibController);

app.use('/api', apiController);

app.use(notFoundController);

app.use(internalServerErrorController.internalServerError);

module.exports = app;