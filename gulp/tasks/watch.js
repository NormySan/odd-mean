var gulp = require('gulp');

/**
 * Watch task.
 */
gulp.task('watch', function() {
  var scripts = ['./server.js', './client/**/*.js', './server/**/*.js'];
  var styles = ['./client/assets/sass/**/*.scss'];

  gulp.watch(scripts, ['jshint']);
  gulp.watch(styles, ['sass']);
});
