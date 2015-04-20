var concat  = require('gulp-concat');
var gulp    = require('gulp');
var uglify  = require('gulp-uglify');

/**
 * Concatenate and minify script files.
 */
gulp.task('scripts', function() {
  var scripts = [].concat(assets.vendor.js, assets.client);

  return gulp.src(scripts)
    .pipe(concat('application.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/dist'))
});
