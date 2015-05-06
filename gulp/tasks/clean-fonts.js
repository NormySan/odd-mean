var config  = require('../config');
var del     = require('del');
var gulp    = require('gulp');

/**
 * Clean fonts task.
 */
gulp.task('clean:fonts', function(callback) {
  del(config.paths.fonts.dest, callback);
});
