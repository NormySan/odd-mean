var gulp    = require('gulp');
var nodemon = require('gulp-nodemon');

/**
 * Task to start the development server with nodemon.
 */
gulp.task('nodemon', function() {
  nodemon({
    script: 'server.js',
    ext: 'js json',
    env: {
      'NODE_ENV': 'development'
    },
    ignore: ['.git', 'client/assets/vendor', 'node_modules/**/node_modules'],
    nodeArgs: ['--debug']
  });
});
