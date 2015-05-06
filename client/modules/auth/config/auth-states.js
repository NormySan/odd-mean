(function() { 'use strict';

/**
 * @ngInject
 */
function AuthStates($stateProvider) {

  $stateProvider.state('auth', {
    abstract: true
  });

  $stateProvider.state('auth.login', {
    url: '/login',
    views: {
      'content@': {
        controller: 'AuthController as ctrl',
        templateUrl: '/modules/auth/templates/login.html'
      }
    }
  });
}

angular.module('odd.auth').config(AuthStates);

})();
