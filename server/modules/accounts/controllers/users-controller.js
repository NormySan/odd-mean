'use strict';

/**
 * Require dependencies.
 */
var mongoose  = require('mongoose');
var User      = mongoose.model('User');

/**
 * Get a list of user.
 */
exports.list = function(req, res, next) {
  var criteria = {};

  User.find(criteria, function(err, users) {
    if (err) return next(err);

    res.status(200).send(users);
  });
};

/**
 * Get the logged in users profile.
 */
exports.profile = function(req, res, next) {

  if (!req.user) {
    return res.status(401).send({
      message: 'You need to be authenticated to access this resource.',
      status: 'authentication required'
    });
  }

  res.status(200).send(req.user);
};

/**
 * Get the specified user.
 */
exports.show = function(req, res, next) {
  res.status(200).send(req.user);
};

/**
 * Middleware to get an user by id.
 */
exports.userById = function(req, res, next, id) {
  User.findById(id, function(err, user) {
    if (err) return next(err);

    if (!user) {
      return res.send(404, {
        message: 'No user with this id exists.',
        status: 'not found'
      });
    }

    req.user = user;

    next();
  });
};
