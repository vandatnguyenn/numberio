const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);

  next(err);
};

module.exports = errorHandler;
