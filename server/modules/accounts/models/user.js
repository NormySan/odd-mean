'use strict';

/**
 * Require dependencies.
 */
var bcrypt      = require('bcrypt');
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

/**
 * User Schema.
 */
var UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    select: false,
    required: true,
    minlength: 6
  },
  name: {
    type: String,
    required: true,
    trim: true
  }
});

/**
 * Hook a pre save method to hash the password
 */
UserSchema.pre('save', function(next) {
  var user = this;

  if (!user.isModified('password')) return next();

  // Generate a password salt.
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    // Hash the password with our salt.
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);

        // Override the cleartext password with the hashed one.
        user.password = hash;

        next();
    });
  });
});

/**
 * Compare passwords.
 */
UserSchema.methods.authenticate = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, match) {
    if (err) return callback(err);

    callback(null, match);
  });
};

/**
 * Register model with mongoose.
 */
module.exports = mongoose.model('User', UserSchema);
