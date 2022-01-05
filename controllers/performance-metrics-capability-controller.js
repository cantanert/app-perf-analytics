const getMetrics = (req, res) => {
  res.status(200).json({
    message: 'getMetrics',
    processEnvs: process.env
  })
}

const postMetrics = (req, res) => {
  const query = {
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  };

  res.status(200).json({
    message: 'postMetrics',
    payload: query
  })
}

module.exports = {getMetrics, postMetrics}