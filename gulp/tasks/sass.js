var browserSync = require('browser-sync');
var config      = require('../config');
var gulp        = require('gulp');
var neat        = require('node-neat').includePaths;
var sass        = require('gulp-sass');

/**
 * Compile sass files into a css file.
 */
gulp.task('sass', ['clean:css'], function() {
  return gulp.src(config.sass)
    .pipe(sass({
      includePaths: ['styles'].concat(neat),
      onError: function(err) {
        console.log(err);
      }
    }))
    .pipe(gulp.dest(config.assets.css.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});
