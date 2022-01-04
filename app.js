const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dashboardClientService = require('./api/routes/dashboard-client-service');
const dataProviderClientService = require('./api/routes/data-provier-client-service');
const perfAnalyticsLibService = require('./api/routes/perf-analytics-lib-service');

const api = require('./api/routes/api');
const notFoundController = require('./controllers/not-found-controller')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.use(express.static(`${__dirname}/packages/app-perf-analytics-dashboard-client/build`));
app.use('/', dashboardClientService);

app.use(express.static(`${__dirname}/packages/app-perf-analytics-data-provider-client/build`));
app.use('/data-provider-client', dataProviderClientService);

app.use('/perf-analytics-lib.js',perfAnalyticsLibService);

app.use('/api', api);

app.use((req, res, next) => {
  const error = new Error('404 - Not Found');
  error.status = 404;
  next(error);
});

app.use(notFoundController.notFound);

module.exports = app;