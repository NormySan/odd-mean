var config  = require('../config');
var gulp    = require('gulp');

/**
 * Watch task.
 */
gulp.task('watch', function() {
  var tests = ['./tests/**/*.js'];

  gulp.watch(config.scripts, ['jshint']);
  gulp.watch(config.sass.src, ['scsslint', 'sass']);
  gulp.watch(config.assets.images.src, ['images']);
});
