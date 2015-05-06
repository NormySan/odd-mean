(function() { 'use strict';

/**
 * @ngInject
 */
function AuthController($state, Auth) {
  var self = this;

  this.credentials = {};

  /**
   * Login a user.
   */
  this.login = function() {
    Auth.login(this.credentials).then(function success() {
      $state.go('articles');
    });
  };

  /**
   * Logout a user.
   */
  this.logout = function() {
    Auth.logout().then(function success() {
      $state.go('articles');
    });
  };
}

angular.module('odd.auth').controller('AuthController', AuthController);

})();
