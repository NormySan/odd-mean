/**
 * Gulp configuration.
 */
module.exports = {
  sass: [
    './client/assets/sass/*.scss'
  ],
  scripts: [
    './server.js',
    './client/**/*.js',
    './server/**/*.js',
    '!./client/assets/vendor/**/*'
  ],
  assets: {
    css: {
      dest: './public/assets/css'
    },
    fonts: {
      dest: './public/assets/fonts',
      src: [
        './client/assets/vendor/bootstrap/fonts/*',
        './client/assets/vendor/fontawesome/fonts/*'
      ]
    },
    images: {
      dest: './public/assets/images',
      src: [
        './client/assets/images/**/*.{jpeg,jpg,png,svg}'
      ]
    }
  }
};
