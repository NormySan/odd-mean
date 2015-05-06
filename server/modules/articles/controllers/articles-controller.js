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

  Article
    .find(criteria)
    .populate('author', 'name')
    .exec(function(err, articles) {
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
 * Get an article by date and slug.
 */
exports.findByDateAndSlug = function(req, res, next) {
  res.send(req.params);
};

/**
 * Create a new article.
 */
exports.create = function(req, res, next) {

  // The user must be logged in to create an article.
  if (!req.user) {
    return res.status(401).send({
      message: 'You must be logged in to post an article.',
      status: 'authentication required'
    });
  }

  // Make sure required fields are set.
  if (!req.body.title || !req.body.body) {
    return res.status(401).send({
      message: 'The title and body fields are required.',
      status: 'missing fields'
    });
  }

  // Create the article.
  var article = new Article({
    title: req.body.title,
    body: req.body.body,
    author: req.user.id
  });

  // Save the article.
  article.save(function(err, article) {
    if (err) return next(err);

    res.status(200).send({
      message: 'Article successfully created.',
      status: 'create success'
    });
  });
};

/**
 * Middleware to get an article by id.
 */
exports.articleById = function(req, res, next, id) {
  Article.findById(id, function(err, article) {
    if (err) return next(err);

    if (!article) {
      return res.send(404, {
        message: 'No article with this id exists.',
        status: 'not found'
      });
    }

    req.article = article;

    next();
  });
};
