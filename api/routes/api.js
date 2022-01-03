const express = require('express');
const router = express.Router();

const performanceMetricsCapabilityController = require('../../controllers/performance-metrics-capability-controller');

router.get(
  '/performance-metrics-capability',
  performanceMetricsCapabilityController.getMetrics
);

router.post(
  '/performance-metrics-capability',
  performanceMetricsCapabilityController.postMetrics
);


module.exports = router;