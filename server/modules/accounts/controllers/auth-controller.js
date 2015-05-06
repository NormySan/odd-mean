'use strict';

/**
 * Require dependencies.
 */
var mongoose  = require('mongoose');
var passport  = require('passport');
var User      = mongoose.model('User');

/**
 * Try to authenticate the users credentials.
 */
exports.login = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);

    // If no user was supplied the login attempt failed. Return the
    // failure message set.
    if (!user) {
      return res.status(401).send(info);
    }

    // Credentials were good. Login the user.
    req.login(user, function(err) {
      if (err) return next(err);

      res.status(200).send({
        message: 'Login was successfull.',
        status: 'login success'
      });
    });
  })(req, res, next);
};

/**
 * Logs out the currently logged in user.
 */
exports.logout = function(req, res, next) {

  // Logout the user.
  req.logout();

  res.status(200).send({
    message: 'User has been successfully logged out.',
    status: 'logout success'
  });
};
