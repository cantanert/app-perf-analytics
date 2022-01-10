const express = require('express');
const router = express.Router();
const Endpoints = require('../../enums/endpoints');
const performanceMetricsQueryService = require('../services/performance-metrics-query-service');
const performanceMetricsCapabilityService = require('../services/performance-metrics-capability-service')
const validateMetric = require('../middleware/validate-metric');
const metricDto = require('../dto/metric-dto');
const dateRangeDto = require('../dto/date-range-dto');

router.get(
  Endpoints.PERFORMANCE_METRICS_QUERY,
  performanceMetricsQueryService.getMetrics
);

router.post(
  Endpoints.PERFORMANCE_METRICS_QUERY,
  validateMetric(dateRangeDto),
  performanceMetricsQueryService.getByPostMetrics
);

router.post(
  Endpoints.PERFORMANCE_METRICS_CAPABILITY,
  validateMetric(metricDto),
  performanceMetricsCapabilityService.sendAnalytics
)


module.exports = router;