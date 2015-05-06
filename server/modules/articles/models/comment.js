'use strict';

/**
 * Module dependencies.
 */
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var timestamps  = require('mongoose-timestamp');

/**
 * Comment Schema.
 */
var CommentSchema = new Schema({
  article_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  created_by: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  body: {
    type: String,
    trim: true,
    required: true
  }
});

/**
 * Plugins.
 */
CommentSchema.plugin(timestamps, {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

mongoose.model('Comment', CommentSchema);
