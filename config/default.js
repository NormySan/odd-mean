'use strict';

/**
 * @file This is the default configuration file. This file should contain all
 * default configuration values that are not specific to a certain
 * environment. The various environment configurations should
 * then override values where needed.
 */
module.exports = {

  // Server configuration.
  app: {
    name: 'Odd Mean',
    port: 9000
  },

  // Mongo DB.
  mongodb: {
    database: 'odd-mean',
    host: '127.0.0.1',
    port: 17017
  },

  // Mandrill.
  mandrill: {
    host: 'smtp.mandrillapp.com',
    port: 587,
    username: '',
    key: ''
  },

  // Redis cache.
  redis: {
    host: '127.0.0.1',
    port: 6379
  },

  // Websockets.
  sockets: {}
};
