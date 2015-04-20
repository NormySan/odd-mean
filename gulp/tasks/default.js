var gulp = require('gulp');

/**
 * Default gulp task.
 */
gulp.task('default', ['clean', 'sass', 'jshint', 'watch', 'nodemon']);
