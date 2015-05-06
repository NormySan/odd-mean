'use strict';

/**
 * Module dependencies.
 */
var chai      = require('chai');
var config    = require('config');
var mongoose  = require('mongoose');
var should    = chai.should();
var User      = require(process.cwd() + '/server/modules/accounts/models/user');

/**
 * Unit tests.
 */
describe('User', function() {
  var user, user2;

  before(function() {
    mongoose.connect('mongodb://' + config.mongodb.host + ':' + config.mongodb.port + '/' + config.mongodb.database);
  });

  beforeEach(function() {
    user = new User({
      email: 'test@example.com',
      password: 'pasword',
      name: 'test dummy'
    });

    user2 = new User({
      email: 'test@example.com',
      password: 'pasword',
      name: 'test dummy 2'
    });
  });

  describe('#save()', function() {

    it('should save without error', function(done) {
      user.save(done);
    });

    it('password should be hashed', function(done) {
      user.save(function(err, user) {
        user.password.should.not.equal('password');
        done();
      });
    });

    it('should throw an error when trying to save without an email address', function(done) {
      user.email = '';

      user.save(function(err) {
        should.exist(err);
        done();
      });
    });

    it('should throw an error when trying to save without a password', function(done) {
      user.password = '';

      user.save(function(err) {
        should.exist(err);
        done();
      });
    });

    it('should throw an error when trying to save without a name', function(done) {
      user.name = '';

      user.save(function(err) {
        should.exist(err);
        done();
      });
    });

    it('should require the password to be a minimum of 6 characters in length', function(done) {
      user.password = 'passw';

      user.save(function(err) {
        should.exist(err);
        done();
      });
    });

    it('should throw and error when trying to save user with an existing email address', function(done) {
      user.save(function(err) {
        user2.save(function(err) {
          should.exist(err);
          done();
        });
      });
    });
  });


  describe('#authenticate()', function() {

    it('password should pass authentication', function(done) {
      user.authenticate('password', done);
    });
  });

  afterEach(function(done) {
    User.remove().exec(done);
  });

  after(function() {
    mongoose.disconnect();
  });
});
