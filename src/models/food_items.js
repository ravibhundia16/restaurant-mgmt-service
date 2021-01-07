const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
}, {
    timestamps: true
});

module.exports = mongoose.model('food_items', foodItemSchema);