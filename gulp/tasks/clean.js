var del = require('del');
var gulp = require('gulp');

/**
 * Clean task.
 */
gulp.task('clean', function(callback) {
  del([
    './public/assets/css',
    './public/assets/images',
  ], callback);
});
