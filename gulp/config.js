
/**
 * Gulp configuration.
 */
module.exports = {
  paths: {
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
