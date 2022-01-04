const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
  const dashboardPath = path.resolve(path.join(__dirname,'../../packages/app-perf-analytics-dashboard-client/build/index.html'));
  res.status(200).sendFile(dashboardPath);
});

module.exports = router;