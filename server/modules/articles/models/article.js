'use strict';

/**
 * Module dependencies.
 */
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var timestamps  = require('mongoose-timestamp');

/**
 * Article Schema.
 */
var ArticleSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  created_by: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

/**
 * Plugins.
 */
ArticleSchema.plugin(timestamps, {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

mongoose.model('Article', ArticleSchema);
