const express = require('express');
const router = express.Router();
const Endpoints = require('../../enums/endpoints');
const performanceMetricsQueryService = require('../services/performance-metrics-query-service');
const performanceMetricsCapabilityService = require('../services/performance-metrics-capability-service')

router.get(
  Endpoints.PERFORMANCE_METRICS_QUERY,
  performanceMetricsQueryService.getMetrics
);

router.post(
  Endpoints.PERFORMANCE_METRICS_QUERY,
  performanceMetricsQueryService.getByPostMetrics
);

router.post(
  Endpoints.PERFORMANCE_METRICS_CAPABILITY,
  performanceMetricsCapabilityService.sendAnalytics
)


module.exports = router;