var cache     = require('gulp-cached');
var config    = require('../config');
var gulp      = require('gulp');
var scsslint  = require('gulp-scss-lint');

/**
 * SCSS lint task.
 */
gulp.task('scss-lint', function() {
  return gulp.src(config.sass)
    .pipe(cache('scsslint'))
    .pipe(scsslint());
});
