const express = require('express');
const router = express.Router();

const performanceMetricsCapabilityController = require('../../controllers/performance-metrics-capability-controller');
const sendAnalyticsController = require('../../controllers/send-analytics-controller')

router.get(
  '/performance-metrics-capability',
  performanceMetricsCapabilityController.getMetrics
);

router.post(
  '/performance-metrics-capability',
  performanceMetricsCapabilityController.getByPostMetrics
);

router.post(
  '/send-metrics',
  sendAnalyticsController.sendAnalytics
)


module.exports = router;