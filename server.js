'use strict';

/**
 * Set up global paths to allow easier loading of files when using require.
 */
global.__base = process.cwd() + '/';
global.__server = process.cwd() + '/server/';
global.__modules = process.cwd() + '/server/modules/';

/**
 * Run the init method to bootstrap the server application. This initializes
 * everything like express, mongoose, passport etc.
 */
var app = require(__server + 'start/bootstrap')();

/**
 * Load server configuration, this is handled by the config module.
 */
var config = require('config');

/**
 * Start the server.
 */
app.listen(config.app.port, function() {
  console.log(config.app.name + ' server started on port ' + config.app.port + ' (Running in ' + process.env.NODE_ENV + ' mode)');
});

/**
 * Expose the server application.
 */
exports = module.exports = app;
