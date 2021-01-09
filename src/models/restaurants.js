const mongoose = require('mongoose');

const restaurantsSchema = new mongoose.Schema({
}, {
  timestamps: true
});

module.exports = mongoose.model('resturants', restaurantsSchema);