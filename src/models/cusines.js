const mongoose = require('mongoose');

const cuisinesSchema = new mongoose.Schema({
}, {
  timestamps: true
});

module.exports = mongoose.model('cuisines', cuisinesSchema);