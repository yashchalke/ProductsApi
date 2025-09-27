const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['shirts', 't-shirts', 'jeans', 'shorts'],
    required: true,
  },
  size: {
    type: [String], // allows multiple sizes per product
    enum: ['small', 'medium', 'large', 'x-large'],
    default: [],
  },
  colors: {
    type: [String], // allows multiple color options
    enum: ['black', 'white', 'yellow', 'purple', 'blue', 'green', 'red', 'pink'],
    default: [],
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String, // URL or path to product image
  },
  description: {
    type: String,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Products',productSchema);