'use strict';

/**
 * Shared configuration for all environments. Use the environment specific
 * configuration file to override environment specific configuration.
 */
module.exports = {

  // Server configuration.
  app: {
    port: 9000
  },

  // Database configuration.
  database: {
    mongodb: {
      database: 'odd-mean',
      host: '127.0.0.1',
      port: 27017
    }
  },

  // E-Mail configuration.
  mail: {
    mandrill: {
      host: 'smtp.mandrillapp.com',
      port: 587,
      username: '',
      key: ''
    }
  },

  // Cache configuration.
  cache: {
    redis: {
      host: '127.0.0.1',
      port: 6379
    }
  }
};
