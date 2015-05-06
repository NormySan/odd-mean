'use strict';

/**
 * Require dependencies.
 */
var AuthController = require(__modules + 'accounts/controllers/auth-controller');

/**
 * Authentication routes.
 */
module.exports = function(app) {

  // Attempt to log in a user.
  app.post('/login', AuthController.login);

  // Logout the currently logged in user.
  app.post('/logout', AuthController.logout);

};
