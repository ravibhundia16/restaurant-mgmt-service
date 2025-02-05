'use strict'

const msgCons = require('../constants/msg-constants')
const dbCons = require('../constants/db-constants')
const logCons = require('../constants/log-constants')
const logger = require('../middleware/logger')
const { responseGenerator, errorGenerator } = require('../constants/utils')
const { getRestaurantData } = require('../services/getRestaurantData')

const getRestaurantDataController = async (req, res) => {
  try {
    logger.printLog(logCons.LOG_LEVEL_INFO, 'getRestaurantDataController()', logCons.ENUM_LOG_ENTER)
    let restaurantName, cusineName
    const data = req.query.data
    if (data && data != null) {
      restaurantName = req.body.restaurant_name ? req.body.restaurant_name : false
      cusineName = req.body.cusine_name ? req.body.cusine_name : false
      const response = await getRestaurantData(data, restaurantName, cusineName)
      if (response[msgCons.FIELD_STATUS_CODE] === msgCons.CODE_SERVER_OK || response[msgCons.FIELD_STATUS_CODE] === msgCons.CODE_NO_CONTENT_AVAILABLE) {
        logger.printLog(logCons.LOG_LEVEL_INFO, 'getRestaurantDataController()', logCons.ENUM_LOG_EXIT)
        res.status(msgCons.CODE_SERVER_OK).json(response)
      } else {
        logger.printLog(logCons.LOG_LEVEL_INFO, 'getRestaurantDataController()', logCons.ENUM_LOG_EXIT)
        res.status(response[msgCons.FIELD_STATUS_CODE]).json(response)
      }
    } else {
      logger.printLog(logCons.LOG_LEVEL_ERROR, 'getRestaurantDataController()', logCons.ENUM_LOG_EXIT)
      res.status(msgCons.CODE_PARTIAL_CONTENT).json(errorGenerator([], msgCons.CODE_PARTIAL_CONTENT, msgCons.MSG_PARTIAL_CONTENT, true))
    }
  } catch (error) {
    logger.printLog(logCons.LOG_LEVEL_ERROR, 'getRestaurantDataController()', logCons.ENUM_LOG_EXIT)
    res.status(msgCons.CODE_INTERNAL_SERVER_ERROR).json(errorGenerator(error, msgCons.CODE_INTERNAL_SERVER_ERROR, msgCons.MSG_ERROR_SERVER_ERROR, true))
    throw error
  }
}

module.exports = {
  getRestaurantDataController
}