'use strict'

const dbCons = require('../constants/db-constants')
const dbOperationCons = require('../constants/db-operation-constants')
const msCons = require('../constants/ms-constants')
const msgCons = require('../constants/msg-constants')
const dbOp = require('./db-operation')
const { responseGenerator, errorGenerator } = require('../constants/utils')
const commonRepositories = require('./common-repositories')
const cusineSchema = require('../models/cusines')
const customizationGroupsSchema = require('../models/customization_groups')
const foodItemsSchema = require('../models/food_items')
const foodItemsRestaurantsSchema = require('../models/fooditems_restaurants')
const restaurantsDetailsSchema = require('../models/restaurants_details')

const getRestaurantData = async (collection, query) => {
  try {
    let schema
    switch (collection) {
      case dbCons.COLLECTION_RESTAURANTS_DETAILS:
        schema = restaurantsDetailsSchema
        break;
      case dbCons.COLLECTION_CUSINE:
        schema = cusineSchema
        break;
      case dbCons.COLLECTION_FOOD_ITEMS:
        schema = foodItemsSchema
        break;
      case dbCons.COLLECTION_FOODITEMS_RESTAURANTS:
        schema = foodItemsRestaurantsSchema
        break;
      case dbCons.COLLECTION_CUSTOMIZATION_GROUPS:
        schema = customizationGroupsSchema
        break;
    }
    const response = await commonRepositories.getData(query, dbOp.getCommonProjection(), schema)
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