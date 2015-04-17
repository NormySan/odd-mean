'use strict';

/**
 * Load config.
 */
var config = require(__server + 'config');

/**
 * Dependencies.
 */
var fs = require('fs');
var glob = require('glob');
var mongoose = require('mongoose');

/**
 * Loads the mongoose models.
 */
var loadModels = function() {
  var files = glob.sync(__modules + '*/models/*.js');

  // Require each file found.
  files.forEach(function(file, index) {
    require(file);
  });
};

/**
 * Load mongoose extensions.
 */
var loadExtensions = function() {
  var extensions = glob.sync(__server + 'plugins/mongoose/*.js');

  extensions.forEach(function(file, index) {
    require(file);
  });
};

/**
 * Configure mongoose.
 */
module.exports = function() {
  var mongo = config.database.mongodb;

  // Base URI with host and port.
  var uri = mongo.host + ':' + mongo.port + '/' + mongo.database;

  // If username or password is set add it to the connection string.
  if (typeof mongo.username !== 'undefined' && typeof  mongoose.password !== 'undefined') {
    uri = mongo.username + ':' + mongo.password + '@' + uri;
  }

  // Load mongoose models and custom extensions.
  loadModels();
  loadExtensions();

  return mongoose.connect('mongodb://' + uri);
};
