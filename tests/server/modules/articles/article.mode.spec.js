'use strict';

/**
 * Module dependencies.
 */
var chai      = require('chai');
var config    = require('config');
var mongoose  = require('mongoose');
var should    = chai.should();
var Article   = require(process.cwd() + '/server/modules/articles/models/article');
var User      = require(process.cwd() + '/server/modules/accounts/models/user');

/**
 * Unit tests.
 */
describe('Article', function() {
  var user, article;

  before(function() {
    mongoose.connect('mongodb://' + config.mongodb.host + ':' + config.mongodb.port + '/' + config.mongodb.database);
  });

  beforeEach(function() {
    user = new User({
      email: 'test@example.com',
      password: 'pasword',
      name: 'test dummy'
    });

    article = new Article({
      title: 'Some article title',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      author: user.id
    });
  });

  describe('#save()', function() {

    it('should save without error', function(done) {
      article.save(done);
    });

    it('should have a short id', function(done) {
      article.save(function(err, article) {
        article.shortid.should.be.a('string');
        done();
      });
    });

    it('should have a slug', function(done) {
      article.save(function(err, article) {
        article.slug.should.be.a('string');
        done();
      });
    });

    it('should throw an error when trying to save without a title', function(done) {
      article.title = '';

      article.save(function(err) {
        should.exist(err);
        done();
      });
    });

    it('should throw an error when trying to save without an author', function(done) {
      var article = new Article({
        title: 'Some article title',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
      });

      article.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  afterEach(function(done) {
    Article.remove().exec(function() {
      User.remove().exec(done);
    });
  });

  after(function() {
    mongoose.disconnect();
  });
});
