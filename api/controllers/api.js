const express = require('express');
const router = express.Router();

const performanceMetricsCapabilityService = require('../services/performance-metrics-capability-controller');
const sendAnalyticsService = require('../services/send-analytics-controller')

router.get(
  '/performance-metrics-capability',
  performanceMetricsCapabilityService.getMetrics
);

router.post(
  '/performance-metrics-capability',
  performanceMetricsCapabilityService.getByPostMetrics
);

router.post(
  '/send-metrics',
  sendAnalyticsService.sendAnalytics
)


module.exports = router;