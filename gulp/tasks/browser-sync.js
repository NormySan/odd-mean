var browserSync = require('browser-sync').create();
var gulp        = require('gulp');

/**
 * BrowserSync task.
 */
gulp.task('browser-sync', ['sass'], function() {
  browserSync.init({
    server: "./server.js"
  });
});
