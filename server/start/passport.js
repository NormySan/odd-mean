'use strict';

/**
 * Require dependencies.
 */
var mongoose      = require('mongoose');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User          = mongoose.model('User');

/**
 * Configure passport.
 */
module.exports = function() {

  // Serialize user id for the session.
  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  // Deserialize the user object based on a pre-serialized token
  // which is the user id.
  passport.deserializeUser(function(id, done) {
    User.findById(id, '-password', function(err, user) {
      done(err, user);
    });
  });

  // Local startegy.
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    function(email, password, done) {
      User.findOne({ email: email }, '+password', function (err, user) {
        if (err) return done(err);

        // Make sure we got an user account
        if (!user) {
          return done(null, false, {
            message: 'Invalid email address or password.',
            status: 'invalid credentials'
          });
        }

        // If the user is suspended we do not want to log the user in.
        if (user.suspended) {
          return done(null, false, {
            message: 'You\'r account has been suspended.',
            status: 'account suspended'
          });
        }

        // Check if passwords match.
        user.authenticate(password, function(err, match) {
          if (err) return done(err);

          // If the passwords do not match.
          if (!match) {
            return done(null, false, {
              message: 'Invalid email address or password.',
              status: 'invalid credentials'
            });
          }

          // Removed sensitive data before returning the user object.
          user.password = undefined;

          return done(null, user);
        });
      });
    }
  ));
};
