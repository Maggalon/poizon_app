const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genderCategory: {
    type: String,
  },
  file: {
    type: String
  }
});

const Subcategory = mongoose.model('Subcategory', subcategorySchema);

module.exports = Subcategory;
