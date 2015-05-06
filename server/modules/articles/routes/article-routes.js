'use strict';

/**
 * Require dependencies.
 */
var ArticlesController = require(__modules + 'articles/controllers/articles-controller');

/**
 * Article routes.
 */
module.exports = function(app) {

  app.route('/api/articles')
    .get(ArticlesController.list)
    .post(ArticlesController.create);

  app.route('/api/articles/recent')
    .get(ArticlesController.recent);

  app.route('/api/articles/:year([\d]{4})/:month([\d]{2})/:day([\d]{4})/:slug([\w-]+)')
    .get(ArticlesController.findByDateAndSlug);

  app.route('/api/articles/:articleId')
    .get(ArticlesController.show);

  app.param('articleId', ArticlesController.articleById);
};
