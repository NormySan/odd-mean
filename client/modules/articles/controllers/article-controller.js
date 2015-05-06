(function() { 'use strict';

/**
 * @ngInject
 */
function ArticleController($state, ArticleService) {
  var self = this;

  this.article = {};

  /**
   * Post a new article.
   */
  this.post = function() {
    ArticleService.post(this.article).then(function() {
      $state.go('articles.recent');
    });
  };
}

angular.module('odd.articles').controller('ArticleController', ArticleController);

})();
