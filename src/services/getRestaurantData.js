'use strict'

const dbCons = require('../constants/db-constants')
const dbOperationCons = require('../constants/db-operation-constants')
const msCons = require('../constants/ms-constants')
const msgCons = require('../constants/msg-constants')
const dbOp = require('./db-operation')
const restaurantSchema = require('../models/restaurants')
const cusineSchema = require('../models/cusines')
const foodItemSchema = require('../models/food_items')
const { responseGenerator, errorGenerator } = require('../constants/utils')

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
      return responseGenerator(response, msgCons.CODE_SERVER_OK, msgCons.MSG_SUCCESS_FETCHED_DATA, false)
    } else {
      return responseGenerator(response, msgCons.CODE_NO_CONTENT_AVAILABLE, msgCons.MSG_ERROR_NO_DATA, false)
    }
  } catch (error) {
    return errorGenerator(error, msgCons.CODE_INTERNAL_SERVER_ERROR, msgCons.MSG_ERROR_FETCH_DATA, true)
  }
}

module.exports = {
  getRestaurantData
}