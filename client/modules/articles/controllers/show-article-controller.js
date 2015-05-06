(function() { 'use strict';

/**
 * @ngInject
 */
function ShowArticleController(article) {
  this.article = article;
}

angular.module('odd.articles').controller('ShowArticleController', ShowArticleController);

})();
