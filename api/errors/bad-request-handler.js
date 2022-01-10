const badRequestResponse = (res, errorMessage) => {
  res.status(400).json({
    message: errorMessage
  });
}

module.exports = badRequestResponse