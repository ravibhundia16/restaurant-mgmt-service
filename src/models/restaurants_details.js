const mongoose = require('mongoose');

const restaurantsDetailsSchema = new mongoose.Schema({
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
  is_resturant_verified: {
    type: Number
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
    type: String
  },
  email: {
    type: String
  },
  mobile_number: {
    type: Number
  },
  resturant_location: {
    type: String
  },
  till_number: {
    type: String
  },
  preparation_time_id: {
    type: String
  },
  open_time: {
    type: String
  },
  close_time: {
    type: String
  },
  resturant_image: {
    type: String
  },
  _id: false
}, {
  timestamps: true
});

module.exports = mongoose.model('restaurants_details', restaurantsDetailsSchema);