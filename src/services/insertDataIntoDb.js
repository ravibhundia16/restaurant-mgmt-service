'use strict'

const dbCons = require('../constants/db-constants')
const dbOperationCons = require('../constants/db-operation-constants')
const msCons = require('../constants/ms-constants')
const msgCons = require('../constants/msg-constants')
const dbOp = require('./db-operation')
const config = require('config')
const { responseGenerator, errorGenerator } = require('../constants/utils')
const commonRepo = require('./common-repositories')

const insertDataIntoDb = async(data, collection, database) => {
  try {
    const response = await commonRepo.insertData(data, collection, database)
    if (response && Array.isArray(response) && response.length > 0) {
      return responseGenerator(response, msgCons.CODE_SERVER_OK, msgCons.MSG_SUCCESS_FETCHED_DATA, false)
    } else {
      return responseGenerator(response, msgCons.CODE_NO_CONTENT_AVAILABLE, msgCons.MSG_ERROR_NO_DATA, false)
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
  insertDataIntoDb
}