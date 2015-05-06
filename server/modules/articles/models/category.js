'use strict';

/**
 * Module dependencies.
 */
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

/**
 * Category Schema.
 */
var CategorySchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  }
});

mongoose.model('Category', CategorySchema);
