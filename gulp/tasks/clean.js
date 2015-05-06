var del   = require('del');
var gulp  = require('gulp');

/**
 * Clean task.
 */
gulp.task('clean', ['clean:css', 'clean:fonts', 'clean:images']);
