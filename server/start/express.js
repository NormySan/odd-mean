'use strict';

/**
 * Require dependencies.
 */
var assetmanager  = require('assetmanager');
var bodyParser    = require('body-parser');
var config        = require('config');
var cookieParser  = require('cookie-parser');
var express       = require('express');
var favicon       = require('serve-favicon');
var glob          = require('glob');
var mongoose      = require('mongoose');
var passport      = require('passport');
var serveStatic   = require('serve-static');
var session       = require('express-session');
var mongoStore    = require('connect-mongo')(session);
var swig          = require('swig');

/**
 * Loads server and module route files.
 *
 * @param {object} app
 */
var loadRoutes = function(app) {

  // Load before routes.
  require(__server + 'routes').before(app);

  // Load module routes.
  glob.sync(__modules + '*/routes/*.js').forEach(function(file) {
    require(file)(app);
  });

  // Load after routes.
  require(__server + 'routes').after(app);
};

/**
 * Configure express.
 *
 * @return {object}
 */
module.exports = function() {
  var app = express();

  // Load assets.
  app.locals.assets = assetmanager.process({
    assets: require(__base + 'client/assets/assets.json'),
    debug: (process.env.NODE_ENV !== 'production'),
    webroot: 'public'
  });

  // Set the rendering engine for html files to ejs, also set the
  // views path for server side html pages.
  app.engine('html', swig.renderFile);
  app.set('view engine', 'html');
  app.set('views', __server + 'views');

  // Add body parser to parse recieved json data.
  app.use(bodyParser.json());

  // Parse cookies. Must be above the session.
  app.use(cookieParser());

  // Express/Mongo DB session storage.
  app.use(session({
    secret: config.session.secret,
    store: new mongoStore({
      mongooseConnection: mongoose.connection,
      collection: config.session.collection
    }),
    resave: true,
    saveUninitialized: true
  }));

  // Initialize passport.
  app.use(passport.initialize());
  app.use(passport.session());

  // Setting the fav icon and public folder.
  app.use(favicon(__base + 'public/favicon.ico'));

  // Add static folders.
  app.use(serveStatic(__base + 'public'));

  // Serve client and assets directly from their folder if the server is in
  // development mode.
  if (process.env.NODE_ENV === 'development') {
    app.use('/client', serveStatic(__base + 'client'));
    app.use('/modules', serveStatic(__base + 'client/modules'));
  }

  // Load route files.
  loadRoutes(app);

  return app;
};
