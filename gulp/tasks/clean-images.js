var config  = require('../config');
var del     = require('del');
var gulp    = require('gulp');

/**
 * Clean images task.
 */
gulp.task('clean:images', function(callback) {
  del(config.assets.images.dest, callback);
});
