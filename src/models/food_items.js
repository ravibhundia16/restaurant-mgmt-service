const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
  pos_manu_id: {
    type: Number
  },
  modified_on: {
    type: Date
  },
  date: {
    type: Date
  },
  created_on: {
    type: Date
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  item_type_code: {
    type: String
  },
  item_type: {
    type: String
  },
  max_quantity: {
    type: Date
  },
  quantity: {
    type: Date
  },
  image_url: {
    type: String
  },
  cusine: {
    type: String
  },
  is_deleted: {
    type: Date
  },
  status: {
    type: Date
  },
  cusine_id: {
    type: String
  },
  _id: false
}, {
  timestamps: true
});

module.exports = mongoose.model('food_items', foodItemSchema);