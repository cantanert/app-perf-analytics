export const initializeAnalyticsLib = (destinationUrl) => {
  const Enums = {
    PAINT : "paint",
    RESOURCE: "resource",
    NAVIGATION: "navigation"
  }

  const config = {
    entryTypes: [
      Enums.PAINT,
      Enums.RESOURCE,
      Enums.NAVIGATION
    ]
  }

  let Dataset = {
    FCP: null,
    RESOURCES: [],
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
    [Enums.RESOURCE]: function (entry){
      console.log(entry);
      Dataset.RESOURCES.push({
        name: entry.name,
        initiatorType: entry.initiatorType,
        responseEnd: msToSecondsConverter(entry.responseEnd)
      });
    },
    [Enums.NAVIGATION]: function (entry){
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
      navigator.sendBeacon(destinationUrl, JSON.stringify(window.PerformanceMetrics));
    }
  });
}
