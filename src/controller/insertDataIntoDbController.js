'use strict'

const dbCons = require('../constants/db-constants')
const msgCons = require('../constants/msg-constants')
const { responseGenerator, errorGenerator } = require('../constants/utils')
const { insertDataIntoDb } = require('../services/insertDataIntoDb')

const insertDataIntoDbController = async (req, res) => {
  try {
    const data = req.body.data
    const collection = req.body.collection
    const database = req.body.database ? req.body.database : dbCons.DATABASE_RESTAURANTS
    if (collection && data.length > 0) {
      const response = await insertDataIntoDb(data, collection, database)
      if (response[msgCons.FIELD_STATUS_CODE] === msgCons.CODE_SERVER_OK || response[msgCons.FIELD_STATUS_CODE] === msgCons.CODE_NO_CONTENT_AVAILABLE) {
        res.status(msgCons.CODE_SERVER_OK).json(response)
      } else {
        res.status(response[msgCons.FIELD_STATUS_CODE]).json(response)
      }
    } else {
      res.status(msgCons.CODE_PARTIAL_CONTENT).json(errorGenerator([], msgCons.CODE_PARTIAL_CONTENT, msgCons.MSG_PARTIAL_CONTENT, true))
    }
  } catch (error) {
    res.status(msgCons.CODE_INTERNAL_SERVER_ERROR).json(errorGenerator(error, msgCons.CODE_INTERNAL_SERVER_ERROR, msgCons.MSG_ERROR_SERVER_ERROR, true))
    throw error
  }
}

module.exports = {
  insertDataIntoDbController
}