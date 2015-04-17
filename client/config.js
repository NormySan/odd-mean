'use strict';

/**
 * Application config.
 */
var AppConfig = {

  /**
   * App name.
   */
  name: 'odd',

  /**
   * App dependencies.
   */
  dependencies: [
    'ui.router',
    'ui.bootstrap',
    'ngMessages',
    'ngSanitize',
    'restangular'
  ],

  /**
   * Register a new angular module and add it as a dependency to the base app.
   *
   * @param {string} name
   *   Name of the module to register.
   *
   * @param {array} dependencies
   *   Other modules this module has dependencies on.
   */
  registerModule: function(name, dependencies) {
    angular.module(name, dependencies || []);
    angular.module(this.name).requires.push(name);
  }
};
