var gulp = require('gulp');

/**
 * Default gulp task.
 */
gulp.task('default', ['clean', 'fonts', 'images', 'sass','jshint', 'watch', 'nodemon']);
