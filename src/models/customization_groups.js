const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customizationGroupsSchema = new Schema({
  pos_group_id: {
    type: Number
  },
  group_name: {
    type: String
  },
  group_type: {
    type: String
  },
  group_type_code: {
    type: String
  },
  select_max: {
    type: String
  },
  group_values: {
    type: String
  },
  status: {
    type: Number
  },
  created_on: {
    type: Date
  },
  product_id: {
    type: Number
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('customization_groups', customizationGroupsSchema)