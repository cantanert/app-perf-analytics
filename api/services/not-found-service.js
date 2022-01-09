const Messages = require("../../enums/messages");

const notFoundService = (req, res, next) => {
  const error = new Error(Messages.NOT_FOUND);
  error.status = 404;
  next(error);
}

module.exports = notFoundService;