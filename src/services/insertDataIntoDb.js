'use strict'

const dbCons = require('../constants/db-constants')
const dbOperationCons = require('../constants/db-operation-constants')
const msCons = require('../constants/ms-constants')
const msgCons = require('../constants/msg-constants')
const dbOp = require('./db-operation')
const { responseGenerator } = require('../constants/responseGenerator')
const mongo = require('mongodb').MongoClient
const url = 'mongodb+srv://dbavb786:Avb@90333@taskmanager-e8bqy.mongodb.net/moweb?retryWrites=true&w=majority'

const insertDataIntoDb = async(collection, data) => {
  try {
    mongo.connect(
      url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      (error, client) => {
        if (error) {
          throw error
        } else {
          let db = client.db('moweb')
          const schema = db.collection(collection)
          schema.insertMany(data)
        }
      }
    )
    return { code: 'OK', message: 'Insert done'}
  } catch (error) {
    throw error
  }
}

module.exports = {
  insertDataIntoDb
}