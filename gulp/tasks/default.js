var gulp = require('gulp');

/**
 * Default gulp task.
 */
gulp.task('default', ['clean', 'fonts', 'images', 'scss-lint', 'sass', 'jshint', 'watch', 'nodemon']);
