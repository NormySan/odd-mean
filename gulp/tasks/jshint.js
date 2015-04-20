var cache   = require('gulp-cached');
var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');

/**
 * Jshint task.
 */
gulp.task('jshint', function() {
  var scripts = ['./server.js', './client/**/*.js', './server/**/*.js'];

  return gulp.src(scripts)
    .pipe(cache('linting'))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
