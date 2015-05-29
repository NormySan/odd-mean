var cache   = require('gulp-cached');
var config  = require('../config');
var gulp    = require('gulp');
var jscs    = require('gulp-jscs');

/**
 * Jshint task.
 */
gulp.task('jscs', function() {
  return gulp.src(config.scripts)
    .pipe(cache('jscs'))
    .pipe(jscs());
});
