'use strict';

/**
 * Module dependencies.
 */
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var shortid     = require('shortid');
var slug        = require('slug');
var timestamps  = require('mongoose-timestamp');

/**
 * Article Schema.
 */
var ArticleSchema = new Schema({
  shortid: {
    type: String,
    unique: true
  },
  slug: {
    type: String
  },
  title: {
    type: String,
    trim: true,
    required: true
  },
  body: {
    type: String,
    default: '',
    trim: true
  },
  author: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  }
});

// Generate a slug and shortid on save.
ArticleSchema.pre('save', function (next) {

  // If no shortid is set generate one.
  if (!this.shortid) {
    this.shortid = shortid.generate();
  }


  // Generate a slug if the title has changed.
  if (this.isModified('title')) {
    this.slug = slug(this.title).toLowerCase();
  }

  next();
});

/**
 * Plugins.
 */
ArticleSchema.plugin(timestamps, {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

/**
 * Register model with mongoose.
 */
module.exports = mongoose.model('Article', ArticleSchema);
