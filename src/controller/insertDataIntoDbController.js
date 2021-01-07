'use strict'

const msgCons = require('../constants/msg-constants')
const { responseGenerator } = require('../constants/responseGenerator')
const { insertDataIntoDb } = require('../services/insertDataIntoDb')

const insertDataIntoDbController = async (req, res) => {
  try {
    const collection = req.body.collection
    const data = req.body.data
    if (collection && data.length > 0) {
      const response = await insertDataIntoDb(collection, data)
      if (response && response.code === msgCons.CODE_SERVER_OK) {
        responseGenerator(res, true, msgCons.CODE_SERVER_OK, msgCons.MSG_SUCCESS_INSERT_DATA, false)
      } else {
        responseGenerator(res, [], msgCons.CODE_INTERNAL_ERROR, msgCons.MSG_ERROR_SERVER_ERROR, true)
      }
    } else {
      responseGenerator(res, [], msgCons.CODE_PARTIAL_CONTENT, msgCons.MSG_PARTIAL_CONTENT, false)
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
  insertDataIntoDbController
}