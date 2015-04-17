'use strict';

/**
 * Routes to add before any module routes.
 */
exports.before = function(app) {};

/**
 * Routes to add after any module routes.
 */
exports.after = function(app) {

  // If no other routes match run this.
  app.get('*', function(req, res, next) {
    res.render('index', {
      user: req.user || null
    });
  });
};
