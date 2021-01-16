const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantsDetailsSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  status: {
    type: Number
  },
  cusines: {
    type: String
  },
  latitude: {
    type: String
  },
  longitude: {
    type: String
  },
  home_delivery: {
    type: String
  },
  miles: {
    type: String
  },
  is_restaurant_verified: {
    type: Number,
    required: true
  },
  created_on: {
    type: Date
  },
  pos_rest_id: {
    type: String
  },
  minimum_order: {
    type: Number
  },
  max_people: {
    type: Number
  },
  dine_in: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  mobile_number: {
    type: Number
  },
  restaurant_location: {
    type: String
  },
  till_number: {
    type: String
  },
  preparation_time_id: {
    type: Number
  },
  open_time: {
    type: String
  },
  close_time: {
    type: String
  },
  restaurant_image: {
    type: String
  },
  _id: false
}, {
  timestamps: true
})

module.exports = mongoose.model('restaurants_details', restaurantsDetailsSchema);