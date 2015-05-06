var gulp = require('gulp');

/**
 * Watch tests task.
 */
gulp.task('watch:tests', function() {
  var tests = ['./tests/**/*.js'];

  gulp.watch(tests, ['mocha']);
});
