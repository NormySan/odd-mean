var config  = require('../config');
var del     = require('del');
var gulp    = require('gulp');

/**
 * Clean stylesheets task.
 */
gulp.task('clean:css', function(callback) {
  del(config.assets.css.dest, callback);
});
