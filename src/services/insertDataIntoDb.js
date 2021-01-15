'use strict'

const dbCons = require('../constants/db-constants')
const dbOperationCons = require('../constants/db-operation-constants')
const msCons = require('../constants/ms-constants')
const msgCons = require('../constants/msg-constants')
const dbOp = require('./db-operation')
const config = require('config')
const { responseGenerator, errorGenerator } = require('../constants/utils')
const mongo = require('mongodb').MongoClient
const dbConfig = config.get('database')

const insertDataIntoDb = async(collection, data) => {
  try {
    mongo.connect(
      dbConfig.host,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      (error, client) => {
        if (error) {
          return errorGenerator(error, msgCons.CODE_INTERNAL_SERVER_ERROR, msgCons.MSG_ERROR_CONNECTING_DB, true)
        } else {
          let db = client.db(dbCons.DATABASE_RESTAURANTS)
          const schema = db.collection(collection)
          schema.insertMany(data)
          return responseGenerator([], msgCons.CODE_SERVER_OK, msgCons.MSG_SUCCESS_INSERT_DATA, false)
        }
      }
    )
  } catch (error) {
    return errorGenerator(error, msgCons.CODE_INTERNAL_SERVER_ERROR, msgCons.MSG_ERROR_IN_STORING_DATA, true)
  }
}

module.exports = {
  insertDataIntoDb
}