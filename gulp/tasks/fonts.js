var config  = require('../config');
var gulp    = require('gulp');

/**
 * Move fonts to the assets directory.
 */
gulp.task('fonts', ['clean:fonts'], function() {
  gulp.src(config.assets.fonts.src)
    .pipe(gulp.dest(config.assets.fonts.dest));
});
