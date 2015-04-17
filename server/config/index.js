'use strict';

/**
 * Dependencies.
 */
var _ = require('lodash');

/**
 * Set the environment to development if the NODE_ENV variabes is undefined.
 */
process.env.NODE_ENV = (typeof process.env.NODE_ENV !== 'undefined') ? process.env.NODE_ENV : 'development';

/**
 * Export environment specific configuration file.
 */
module.exports = _.extend(
    require('./env/all'),
    require('./env/' + process.env.NODE_ENV) || {}
);
