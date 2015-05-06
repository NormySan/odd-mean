(function() { 'use strict';

/**
 * @ngInject
 */
function topBar(Auth) {
  return {
    restrict: 'AE',
    scope: true,
    templateUrl: '/modules/core/templates/directives/top-bar.html',
    link: function(scope, element, attrs) {
      scope.user = Auth.user();
    }
  };
}

angular.module('odd.core').directive('topBar', topBar);

})();
