var gulp = require('gulp');

/**
 * Test task.
 */
gulp.task('test', function() {
  process.env.NODE_ENV = 'tests';

  gulp.start(['mocha', 'watch:tests']);
});
