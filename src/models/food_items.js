const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foodItemSchema = new Schema({
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
    type: Number
  },
  quantity: {
    type: Number
  },
  image_url: {
    type: String
  },
  cusine: {
    type: String
  },
  is_deleted: {
    type: Boolean
  },
  status: {
    type: Number
  },
  cusine_id: {
    type: Number
  },
  _id: false
}, {
  timestamps: true
})

module.exports = mongoose.model('food_items', foodItemSchema);