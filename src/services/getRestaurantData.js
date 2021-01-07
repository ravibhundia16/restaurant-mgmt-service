'use strict'

const dbCons = require('../constants/db-constants')
const dbOperationCons = require('../constants/db-operation-constants')
const msCons = require('../constants/ms-constants')
const msgCons = require('../constants/msg-constants')
const dbOp = require('./db-operation')
const restaurantSchema = require('../models/restaurants')
const cusineSchema = require('../models/cusines')
const foodItemSchema = require('../models/food_items')
const { responseGenerator } = require('../constants/responseGenerator')

const getRestaurantData = async (collection, query) => {
  try {
    let schema
    switch (collection) {
      case dbCons.COLLECTION_RESTAURANTS:
        schema = restaurantSchema
        break;
      case dbCons.COLLECTION_CUSINE:
        schema = cusineSchema
        break;
      case dbCons.COLLECTION_FOOD_ITEMS:
        schema = foodItemSchema
        break;
    }
    const response = await dbOp.getData(query, dbOp.getCommonProjection(), schema)
    if (response && Array.isArray(response) && response.length > 0) {
      return response
    } else {
      return []
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
  getRestaurantData
}