(function() { 'use strict';

/**
 * @ngInject
 */
function ArticleService(Restangular) {
  return {

    /**
     * Get a single article by id.
     *
     * @param  {string} id
     * @return {object}
     */
    getById: function(id) {
      return Restangular.one('articles', id).get().then(function(response) {
        return Restangular.copy(response);
      });
    },

    /**
     * Get articles based on filter values.
     *
     * @param  {object} filters
     * @return {object}
     */
    getFiltered: function(filters) {
      return Restangular.all('articles').getList();
    },

    /**
     * Get the most recent articles.
     *
     * @return {object}
     */
    getMostRecent: function() {
      return Restangular.all('articles').getList();
    }
  };
}

angular.module('odd.articles').factory(ArticleService);

})();
