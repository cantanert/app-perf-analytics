const BadRequestHandler = require('../errors/bad-request-handler');

function validateDto(schema) {
  return async (req, res, next) => {
    try {
      const validatedBody = await schema.validate(req.body);
      req.body = validatedBody;
      next();
    } catch (err) {
      BadRequestHandler(res, err.message);
    }
  };
}

module.exports = validateDto;