'use strict';

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
