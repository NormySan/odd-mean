var config    = require('../config');
var cache     = require('gulp-cached');
var gulp      = require('gulp');
var imagemin  = require('gulp-imagemin');

/**
 * Move and minify images.
 */
gulp.task('images', ['clean:images'], function() {
  return gulp.src(config.assets.images.src)
    .pipe(cache('imagemin'))
    .pipe(imagemin())
    .pipe(gulp.dest(config.assets.images.dest));
});
