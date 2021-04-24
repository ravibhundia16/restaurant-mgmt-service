'use strict'

const _ = require('lodash')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const config = require('config')
const logger = require('./logger')

const connection = {}

module.exports = (opts) => {

  const connect = async (dbName) => {
    this.opts = config.database
    dbName = dbName || this.opts.default_db_name

    if (connection[dbName]) {
      return connection[dbName]
    }

    connection[dbName] = await createNewConnection(this.opts, dbName)
    logger.info(`Connected to ${dbName} Successfully`)
    return connection[dbName]
  }

  return { connect }
}

async function createNewConnection(opts, dbName) {
  let url = opts.host
  const mongoOption = await getMongoOptions(opts)
  return mongoose.createConnection(url, mongoOption)
}

async function getMongoOptions(opts) {
  return opts.mongo_options
}