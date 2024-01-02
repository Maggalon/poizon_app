const mongoose = require('mongoose');

const genderCategorySchema = new mongoose.Schema({
  gender: {
    type: String,
    enum: ['Мужская', 'Женская']
  },
  name: {
    type: String,
    required: true,
  },
  file: {
    type: String
  }
});

const GenderCategory = mongoose.model('GenderCategory', genderCategorySchema);

module.exports = GenderCategory;
