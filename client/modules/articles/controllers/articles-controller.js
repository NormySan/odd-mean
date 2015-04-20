(function() { 'use strict';

/**
 * @ngInject
 */
function ArticlesController(ArticleService, articles) {
  var self = this;

  this.ArticleService = ArticleService;
  this.articles = articles;

  this.filter = {};

  /**
   * Filter visible articles.
   */
  this.filter = function() {
    this.ArticleService.getFiltered(this.filter).then(function(response) {
      self.articles = response;
    });
  };
}

})();
