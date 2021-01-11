const mongoose = require('mongoose');

const cusinesSchema = new mongoose.Schema({
  name: {
    type: String
  },
  status: {
    type: Number
  },
  created_on: {
    type: Date
  },
  cusine_imge: {
    type: String
  },
  _id: false
}, {
  timestamps: true
});

module.exports = mongoose.model('cusines', cusinesSchema);