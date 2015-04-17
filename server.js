'use strict';

/**
 * Set up global paths to allow easier loading of files when using require.
 */
global.__base = process.cwd() + '/';
global.__server = process.cwd() + '/server/';
global.__modules = process.cwd() + '/server/modules/';

/**
 * Load server configuration.
 */
var config = require(__server + 'config');

/**
 * Run the init method to bootstrap the server application. This initializes
 * everything like express, mongoose, passport etc.
 */
var app = require(__server + 'start/bootstrap')();

/**
 * Start the server.
 */
app.listen(config.app.port, function() {
  console.log('Odd mean server started on port ' + config.app.port + ' (Running in ' + process.env.NODE_ENV + ' mode)');
});

/**
 * Expose the server application.
 */
exports = module.exports = app;
