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

const dataResolverHelpers = {
  [Enums.PAINT]: function (entry){
    if (entry.name === 'first-contentful-paint'){
      Dataset.FCP = entry.startTime;
    }
  },
  [Enums.RESOURCE]: function (entry){
    console.log(entry);
    Dataset.RESOURCES.push({
      name: entry.name,
      initiatorType: entry.initiatorType,
      responseEnd: entry.responseEnd
    });
  },
  [Enums.NAVIGATION]: function (entry){
    Dataset.DOM_LOAD = entry.domComplete;
    Dataset.WINDOW_LOAD = entry.loadEventEnd;
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
    navigator.sendBeacon('http://localhost:8080/api/send-metrics', JSON.stringify(window.PerformanceMetrics));
  }
});
