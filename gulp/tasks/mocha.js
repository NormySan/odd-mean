
// Loading bcrypt here is a temporary fix for the "Module did not self-register." error.
var bcrypt  = require('bcrypt');

var gulp    = require('gulp');
var gutil   = require('gulp-util');
var mocha   = require('gulp-mocha');

/**
 * Gulp mocha task.
 */
gulp.task('mocha', function() {
  return gulp.src(['tests/server/**/*.js'], { read: false })
    .pipe(mocha({
      reporter: 'spec'
    }))
    .on('error', gutil.log);;
});
