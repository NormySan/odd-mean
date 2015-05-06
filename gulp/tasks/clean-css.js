var config  = require('../config');
var del     = require('del');
var gulp    = require('gulp');

/**
 * Clean stylesheets task.
 */
gulp.task('clean:css', function(callback) {
  del(config.paths.css.dest, callback);
});
