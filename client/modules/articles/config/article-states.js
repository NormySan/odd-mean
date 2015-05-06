(function() { 'use strict';

/**
 * @ngInject
 */
function ArticleStates($stateProvider) {

  $stateProvider.state('articles', {
    abstract: true
  });

  // Frontpage articles.
  $stateProvider.state('articles.recent', {
    url: '/',
    views: {
      'content@': {
        controller: 'ArticlesController as ctrl',
        templateUrl: '/modules/articles/templates/recent-articles.html'
      }
    },
    resolve: {
      articles: ['ArticleService', function(ArticleService) {
        return ArticleService.getMostRecent();
      }]
    }
  });

  // View a single article.
  $stateProvider.state('articles.show', {
    url: '^/article/:id',
    views: {
      'content@': {
        controller: 'ShowArticleController as ctrl',
        templateUrl: '/modules/articles/templates/article.html'
      }
    },
    resolve: {
      article: ['$stateParams', 'ArticleService', function($stateParams, ArticleService) {
        return ArticleService.getById($stateParams.id);
      }]
    }
  });

  // Post a new article.
  $stateProvider.state('articles.create', {
    url: '^/articles/add',
    views: {
      'content@': {
        controller: 'ArticleController as ctrl',
        templateUrl: '/modules/articles/templates/article-form.html'
      }
    }
  });
}

angular.module('odd.articles').config(ArticleStates);

})();
