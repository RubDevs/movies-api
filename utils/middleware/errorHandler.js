const config = require('../../config');

function withErrorStack(error, stack) {
  if (config.dev) {
    return { error, stack };
  }
  return error;
}

function logError(error, req, res, next) {
  console.error(error);
  next();
}

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  res.status(error.status || 500);
  res.json(withErrorStack(error.message, error.stack));
}

module.exports = {
  logError,
  errorHandler,
};
