(function() { 'use strict';

/**
 * @ngInject
 */
function ArticleService($http, Restangular) {
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
      return Restangular.all('articles').all('recent').getList();
    },

    /**
     * Post an article.
     *
     * @param  {object} article
     * @return {object}
     */
    post: function(article) {
      return Restangular.all('articles').post(article);
    }
  };
}

angular.module('odd.articles').factory('ArticleService', ArticleService);

})();
