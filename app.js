const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dashboardClient = require('./api/routes/dashboard-client');
const dataProviderClient = require('./api/routes/data-provier-client');
const api = require('./api/routes/api');
const notFoundController = require('./controllers/not-found-controller')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', dashboardClient);
app.use('/data-provider-client', dataProviderClient);
app.use('/api', api);

app.use((req, res, next) => {
  const error = new Error('404 - Not Found');
  error.status = 404;
  next(error);
});

app.use(notFoundController.notFound);

module.exports = app;