'use strict';

// Start by defining the main module and adding the module dependencies.
angular.module(AppConfig.name, AppConfig.dependencies);

// Setting HTML5 Location Mode.
angular.module(AppConfig.name).config(['$locationProvider', function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);

// Initalize the angular app when document is ready.
angular.element(document).ready(function() {
  angular.bootstrap(document, [AppConfig.name]);
});
