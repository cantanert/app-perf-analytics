const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: 'index.min.js',
    path: path.resolve(__dirname),
    libraryTarget: 'umd',
    library: 'PerfAnalyticsLib',
  },
};