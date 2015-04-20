'use strict';

/**
 * Require dependencies.
 */
var mongoose  = require('mongoose');
var Article   = mongoose.model('Article');
var Category  = mongoose.model('Category');

/**
 * List of articles.
 */
exports.list = function(req, res, next) {
  var criteria = {};

  Article.find(criteria, function(err, articles) {
    if (err) return next(err);

    res.status(200).send(articles);
  });
};

/**
 * Get a list of recent articles.
 */
exports.recent = function(req, res, next) {
  var criteria = {};

  Article.find(criteria, function(err, articles) {
    if (err) return next(err);

    res.status(200).send(articles);
  });
};

/**
 * Get the specified article.
 */
exports.show = function(req, res, next) {
  res.status(200).send(req.article);
};

/**
 * Middleware to get an article by id.
 */
exports.articleById = function(req, res, next, id) {
  Article.findById(id, function(err, article) {
    if (err) return next(err);

    if (!article) {
      return res.send(404, {
        message: 'No article with this id exists.'
      });
    }

    req.article = article;

    next();
  });
};
