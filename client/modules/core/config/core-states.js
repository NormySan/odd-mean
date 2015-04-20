(function() { 'use strict';

/**
 * @ngInject
 */
function CoreStates($stateProvider, $urlRouterProvider) {

  // If no route is matched go to this route.
  $urlRouterProvider.otherwise('/');
}

angular.module('odd.core').config(CoreStates);

})();
