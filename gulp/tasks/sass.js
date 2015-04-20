var browserSync = require('browser-sync');
var gulp        = require('gulp');
var neat        = require('node-neat').includePaths;
var sass        = require('gulp-sass');

/**
 * Compile sass files into a css file.
 */
gulp.task('sass', ['clean'], function() {
  return gulp.src('./client/assets/sass/*.scss')
    .pipe(sass({
      includePaths: ['styles'].concat(neat),
      onError: function(err) {
        console.log(err);
      }
    }))
    .pipe(gulp.dest('./public/assets/css'))
    .pipe(browserSync.reload({ stream: true }));
});
