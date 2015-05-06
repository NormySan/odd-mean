(function() { 'use strict';

/**
 * @ngInject
 */
function Auth($http, $window) {
  var user = $window.user || null;

  return {

    /**
     * Attempt to login the user with supplied credentials. The credentials
     * object should contain an email and a password.
     *
     * @param  {object} credentials
     * @return {object}
     */
    login: function(credentials) {
      return $http.post('login', credentials).then(function success(response) {
        user = response.data;
      },
      function error() {
        user = null;
      });
    },

    /**
     * Logout the currently logged in user.
     *
     * @return {object}
     */
    logout: function() {
      return $http.post('logout').then(function success(response) {
        user = null;
      });
    },

    /**
     * Get the logged in user details or null.
     *
     * @return {mixed}
     */
    user: function() {
      return user;
    }
  };
}

angular.module('odd.auth').factory('Auth', Auth);

})();
