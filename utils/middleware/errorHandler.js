const boom = require('@hapi/boom');
const config = require('../../config');
const debug = require('debug')('app:error');

function withErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack };
  }
  return error;
}

function logError(error, req, res, next) {
  debug(error);
  next(error);
}

function wrapErrors(error, req, res, next) {
  if (!error.isBoom) {
    next(boom.badImplementation(error));
  }
  next(error);
}

// eslint-disable-next-line no-unused-vars
function errorHandler(error, req, res, next) {
  const {
    output: { statusCode, payload },
  } = error;
  res.status(statusCode);
  res.json(withErrorStack(payload, error.stack));
}

module.exports = {
  logError,
  errorHandler,
  wrapErrors,
};
