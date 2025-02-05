'use strict'

/*
  query for restaurant details => https://jsoneditoronline.org/#left=cloud.2c2a891749bb452c9bba15bfd8d23ab4
  query for fooditems => https://jsoneditoronline.org/#left=cloud.bc55bc757e714db09170cfe240621e6d
*/

const dbCons = require('../constants/db-constants')
const dbOperationCons = require('../constants/db-operation-constants')
const msCons = require('../constants/ms-constants')
const msgCons = require('../constants/msg-constants')
const logCons = require('../constants/log-constants')
const dbOp = require('./db-operation')
const logger = require('../middleware/logger')
const { responseGenerator, errorGenerator } = require('../constants/utils')
const { commonRepository } = require('@ravibhundia/mongoose-db-repositories')

const getRestaurantData = async (data, restaurantName, cusineName) => {
  try {
    logger.printLog(logCons.LOG_LEVEL_INFO, 'getRestaurantData()', logCons.ENUM_LOG_ENTER)
    let query
    switch (data) {
      case dbCons.COLLECTION_RESTAURANT_DETAILS:
        query = await queryForRestaurantDetails(restaurantName, cusineName)
        break;
      case dbCons.COLLECTION_CUSINES:
        query = await queryForCusineDetails(restaurantName, cusineName)
        break;
    }
    const response = await commonRepository.getDataWithAggregate(query, dbCons.COLLECTION_FOODITEMS_RESTAURANTS, dbCons.DATABASE_RESTAURANTS)
    if (response && Array.isArray(response) && response.length > 0) {
      logger.printLog(logCons.LOG_LEVEL_INFO, 'getRestaurantData()', logCons.ENUM_LOG_EXIT)
      return responseGenerator(response, msgCons.CODE_SERVER_OK, msgCons.MSG_SUCCESS_FETCHED_DATA, false)
    } else {
      logger.printLog(logCons.LOG_LEVEL_INFO, 'getRestaurantData()', logCons.ENUM_LOG_EXIT)
      return responseGenerator(response, msgCons.CODE_NO_CONTENT_AVAILABLE, msgCons.MSG_ERROR_NO_DATA, false)
    }
  } catch (error) {
    logger.printLog(logCons.LOG_LEVEL_ERROR, `Error while getRestaurantData(): ${error}`)
    throw error
  }
}

const queryForRestaurantDetails = (restaurantName, cusineName) => {
  const queryArray = []
  if (restaurantName) {
    queryArray.push(dbOp.getMatchedResult(getMatchQueryForRestaurantName(restaurantName)))
  }
  queryArray.push(dbOp.getGroupObject(getGroupQueryForRestaurant()))
  queryArray.push(dbOp.getLookUpPipeline(dbCons.COLLECTION_RESTAURANT_DETAILS, getLetObjectForRestaurant(), getPipelineArrayForRestaurant(), msCons.FIELD_RESTAURANT_DATA))
  queryArray.push(dbOp.getUnwindedResponse('$' + msCons.FIELD_RESTAURANT_DATA))
  queryArray.push(dbOp.getProjectedField(getFinalProjectionForRestautantData()))
  return queryArray
}

const queryForCusineDetails = (restaurantName, cusineName) => {
  const queryArray = []
  queryArray.push(dbOp.getMatchedResult(getMatchQueryForFoodItems(restaurantName, cusineName)))
  queryArray.push(dbOp.getProjectedField(projectionForFoodItems()))
  return queryArray
}

const getMatchQueryForRestaurantName = (restaurantName) => {
  const json = {}
  json[dbCons.FIELD_RESTAURANT_NAME] = restaurantName
  return json
}

const getGroupQueryForRestaurant = () => {
  const json = {}
  json[dbCons.FIELD__ID] = {}
  json[dbCons.FIELD__ID][dbCons.FIELD_RESTAURANT_NAME] = '$' + dbCons.FIELD_RESTAURANT_NAME
  json[dbCons.FIELD__ID][dbCons.FIELD_RESTAURANT_ID] = '$' + dbCons.FIELD_RESTAURANT_ID
  json[dbCons.FIELD_CUSINE_NAME] = {}
  json[dbCons.FIELD_CUSINE_NAME][dbOperationCons.FIELD_ADD_TO_SET] = '$' + dbCons.FIELD_CUSINE_NAME
  return json
}

const getLetObjectForRestaurant = () => {
  const json = {}
  json[dbCons.FIELD_RESTAURANT_NAME] = '$' + dbCons.FIELD__ID + '.' + dbCons.FIELD_RESTAURANT_NAME
  return json
}

const getPipelineArrayForRestaurant = () => {
  const finalArray = []
  finalArray.push(getMatchQueryForRestaurant())
  finalArray.push(dbOp.getProjectedField(dbOp.getCommonProjection()))
  return finalArray
}

const getMatchQueryForRestaurant = () => {
  const exprJson = {}
  const matchJson = {}
  const andArray = []
  const restaurantName = {}
  restaurantName[dbOperationCons.OP_EQUAL] = ['$' + dbCons.FIELD_NAME, '$$' + dbCons.FIELD_RESTAURANT_NAME]
  andArray.push(restaurantName)
  exprJson[dbOperationCons.OP_AND] = andArray
  matchJson[dbOperationCons.FIELD_EXPR] = exprJson
  return dbOp.getAggregationJson(dbOperationCons.FIELD_MATCH, matchJson)
}

const getFinalProjectionForRestautantData = () => {
  const json = {}
  json[dbCons.FIELD__ID] = false
  json[dbCons.FIELD_NAME] = '$' + dbCons.FIELD__ID + '.' + dbCons.FIELD_RESTAURANT_NAME
  json[dbCons.FIELD_RESTAURANT_ID] = '$' + dbCons.FIELD__ID + '.' + dbCons.FIELD_RESTAURANT_ID
  json[dbCons.FIELD_CUSINE_NAME] = '$' + dbCons.FIELD_CUSINE_NAME
  json[msCons.FIELD_RESTAURANT_VERIFIED] = '$' + msCons.FIELD_RESTAURANT_DATA + '.' + dbCons.FIELD_IS_RESTAURANT_VERIFIED
  json[dbCons.FIELD_LATITUDE] = '$' + msCons.FIELD_RESTAURANT_DATA + '.' + dbCons.FIELD_LATITUDE
  json[dbCons.FIELD_LONGITUDE] = '$' + msCons.FIELD_RESTAURANT_DATA + '.' + dbCons.FIELD_LONGITUDE
  json[dbCons.FIELD_NAME] = '$' + msCons.FIELD_RESTAURANT_DATA + '.' + dbCons.FIELD_NAME
  json[dbCons.FIELD_EMAIL] = '$' + msCons.FIELD_RESTAURANT_DATA + '.' + dbCons.FIELD_EMAIL
  json[dbCons.FILD_MOBILE_NUMBER] = '$' + msCons.FIELD_RESTAURANT_DATA + '.' + dbCons.FILD_MOBILE_NUMBER
  json[dbCons.FIELD_RESTAURANT_LOCATION] = '$' + msCons.FIELD_RESTAURANT_DATA + '.' + dbCons.FIELD_RESTAURANT_LOCATION
  json[dbCons.FIELD_OPEN_TIME] = '$' + msCons.FIELD_RESTAURANT_DATA + '.' + dbCons.FIELD_OPEN_TIME
  json[dbCons.FIELD_CLOSE_TIME] = '$' + msCons.FIELD_RESTAURANT_DATA + '.' + dbCons.FIELD_CLOSE_TIME
  json[dbCons.FILED_RESTAURANT_IMAGE] = '$' + msCons.FIELD_RESTAURANT_DATA + '.' + dbCons.FILED_RESTAURANT_IMAGE
  json[dbCons.FIELD_DINE_IN] = '$' + msCons.FIELD_RESTAURANT_DATA + '.' + dbCons.FIELD_DINE_IN
  json[dbCons.FIELD_MAX_PEOPLE] = '$' + msCons.FIELD_RESTAURANT_DATA + '.' + dbCons.FIELD_MAX_PEOPLE
  return json
}

const getMatchQueryForFoodItems = (restaurantName, cusineName) => {
  const json = {}
  json[dbCons.FIELD_RESTAURANT_NAME] = restaurantName
  if (cusineName) {
    json[dbCons.FIELD_CUSINE_NAME] = cusineName
  }
  return json
}

const projectionForFoodItems = () => {
  const json = {}
  json[dbCons.FIELD__ID] = false
  json[dbCons.FIELD_CUSINE_NAME] = true
  json[dbCons.FIELD_FOODITEM_NAME] = true
  json[dbCons.FIELD_COST] = true
  json[dbCons.FIELD_DESCRIPTION] = true
  json[dbCons.FIELD_MAIN_PRICE] = true
  json[dbCons.FIELD_SPECIAL_PRICE] = true
  json[dbCons.FIELD_DISCOUNT] = true
  json[dbCons.FIELD_DISCOUNT_PERCENT] = true
  return json
}

module.exports = {
  getRestaurantData
}