const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
  const dataProviderPath = path.resolve(path.join(__dirname,'../../packages/perf-analytics-lib/index.min.js'));
  res.status(200).sendFile(dataProviderPath);
});

module.exports = router;