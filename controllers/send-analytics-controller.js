const sendAnalytics = (req, res) => {
  //TODO mongoose save
  res.status(200).json({
    message: 'postMetrics',
    payload: req.body
  })
}

module.exports = {sendAnalytics}