const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cusinesSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
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
})

module.exports = mongoose.model('cusines', cusinesSchema);