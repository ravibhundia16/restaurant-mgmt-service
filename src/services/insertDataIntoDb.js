'use strict'

const dbCons = require('../constants/db-constants')
const dbOperationCons = require('../constants/db-operation-constants')
const msCons = require('../constants/ms-constants')
const msgCons = require('../constants/msg-constants')
const logCons = require('../constants/log-constants')
const dbOp = require('./db-operation')
const config = require('config')
const logger = require('../middleware/logger')
const { responseGenerator, errorGenerator } = require('../constants/utils')
const { commonRepository } = require('@ravibhundia/mongoose-db-repositories')

const insertDataIntoDb = async (data, collection, database) => {
  try {
    logger.printLog(logCons.LOG_LEVEL_INFO, 'insertDataIntoDb()', logCons.ENUM_LOG_ENTER)
    const response = await commonRepository.insertData(data, collection, database)
    if (response && Array.isArray(response) && response.length > 0) {
      logger.printLog(logCons.LOG_LEVEL_INFO, 'insertDataIntoDb()', logCons.ENUM_LOG_EXIT)
      return responseGenerator(response, msgCons.CODE_SERVER_OK, msgCons.MSG_SUCCESS_FETCHED_DATA, false)
    } else {
      logger.printLog(logCons.LOG_LEVEL_INFO, 'insertDataIntoDb()', logCons.ENUM_LOG_EXIT)
      return responseGenerator(response, msgCons.CODE_NO_CONTENT_AVAILABLE, msgCons.MSG_ERROR_NO_DATA, false)
    }
  } catch (error) {
    logger.printLog(logCons.LOG_LEVEL_ERROR, `Error while insertDataIntoDb(): ${error}`)
    throw error
  }
}

module.exports = {
  insertDataIntoDb
}