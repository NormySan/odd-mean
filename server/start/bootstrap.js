'use strict';

/**
 * Sets the environment variable to development if undefined, otherwise it
 * will keep the currently configured environment.
 */
var setEnvironment = function() {
  process.env.NODE_ENV = (typeof process.env.NODE_ENV !== 'undefined') ? process.env.NODE_ENV : 'development';
};

/**
 * Bootstrap the server.
 *
 * @return {object} The configured express app.
 */
module.exports = function() {

  // Initialize mongoose.
  require('./mongoose')();

  // Initialize passport authentication.
  require('./passport')();

  // Initialize the express app.
  return require('./express')();
};
