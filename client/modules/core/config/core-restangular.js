(function() {'use strict';

/**
 * @ngInject
 */
function ConfigRestangular(RestangularProvider) {

  // Set the base url for restangular.
  RestangularProvider.setBaseUrl('/api');

  // Configure restangular to use _id as the id field instead because
  // we use mongodb.
  RestangularProvider.setRestangularFields({
    id: '_id'
  });
}

angular.module('odd.core').config(ConfigRestangular);

})();
