var cache   = require('gulp-cached');
var gulp    = require('gulp');
var jscs  = require('gulp-jscs');

/**
 * Jshint task.
 */
gulp.task('jscs', function() {
  var scripts = ['./server.js', './client/**/*.js', './server/**/*.js', '!./client/assets/vendor/**/*'];

  return gulp.src(scripts)
    .pipe(cache('jscs'))
    .pipe(jscs());
});
