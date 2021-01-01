const mongoose = require('mongoose');

const restaurantsSchema = new mongoose.Schema({
    status: {
        type: Number,
        required: true,
        default: 0
    },
    cusines: {
        type: String,
        required: true,
        default: ''
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true
    },
    home_delivery: {
        type: String,
        required: true,
        default: ''
    },
    is_resturant_verified: {
        type: Number,
        required: true,
        default: 0
    },
    created_on: {
        type: Date,
        required: true
    },
    pos_rest_id: {
        type: String
    },
    minimum_order: {
        type: Number,
        default: 0
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
        type: String,
        required: true
    },
    mobile_number: {
        type: Number,
        required: true
    },
    resturant_location:{
        type: String,
        required: true
    },
    till_number:{
        type: String
    },
    preparation_time_id:{
        type: String
    },
    open_time: {
        type: String
    },
    open_time: {
        type: String
    },
    resturant_image:{
        type: String
    }
});

module.exports = mongoose.model("resturants", restaurantsSchema);