export const initializeAnalyticsLib = (destinationUrl) => {
  const Enums = {
    PAINT : "paint",
    NAVIGATION: "navigation"
  }

  const config = {
    entryTypes: [
      Enums.PAINT,
      Enums.NAVIGATION
    ]
  }

  let Dataset = {
    TTFB: null,
    FCP: null,
    WINDOW_LOAD: null,
    DOM_LOAD: null
  };

  function msToSecondsConverter(milliseconds){
    return milliseconds / 1000;
  }

  const dataResolverHelpers = {
    [Enums.PAINT]: function (entry){
      if (entry.name === 'first-contentful-paint'){
        Dataset.FCP = msToSecondsConverter(entry.startTime);
      }
    },
    [Enums.NAVIGATION]: function (entry){
      Dataset.TTFB = msToSecondsConverter(entry.responseStart);
      Dataset.DOM_LOAD = msToSecondsConverter(entry.domComplete);
      Dataset.WINDOW_LOAD = msToSecondsConverter(entry.loadEventEnd);
    }
  }

  new PerformanceObserver((entryList) => {
    for (const entry of entryList.getEntries()) {
      dataResolverHelpers[entry.entryType](entry);
    }
    window.PerformanceMetrics = Dataset;
  }).observe(config);

  document.addEventListener('visibilitychange', function logData() {
    if (document.visibilityState === 'hidden') {
      window.PerformanceMetrics.dateInfo = new Date();
      navigator.sendBeacon(destinationUrl, JSON.stringify(window.PerformanceMetrics));
    }
  });
}
