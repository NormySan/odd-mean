(function() { 'use strict';

/**
 * @ngInject
 */
function ArticleStates($stateProvider, $urlRouterProvider) {

  // Frontpage articles.
  $stateProvider.state('articles', {
    url: '/',
    controller: 'ArticlesController as ctrl',
    template: '<ui-view/>',
    resolve: {
      articles: ['ArticleService', function(ArticleService) {
        return ArticleService.getMostRecent();
      }]
    }
  });

  // If no route is matched go to this route.
  $urlRouterProvider.otherwise('/');
}

angular.module('odd.articles').config(ArticleStates);

})();
