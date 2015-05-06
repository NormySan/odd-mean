'use strict';

/**
 * Require dependencies.
 */
var UsersController = require(__modules + 'accounts/controllers/users-controller');

/**
 * Article routes.
 */
module.exports = function(app) {

  app.route('/api/profile')
    .get(UsersController.profile);

  app.route('/api/users')
    .get(UsersController.list);

  app.route('/api/users/:userId')
    .get(UsersController.show);

  app.param('userId', UsersController.userById);
};
