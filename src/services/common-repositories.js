'use strict'

const dbOp = require('./db-operation')
const _ = require('lodash')

const getData = async (query, projection, collection) => {
  try {
    const response = await collection.find(query, projection)
    return response
  } catch (error) {
    throw error
  }
}

const updateData = async (query, data, collection) => {
  try {
    const response = await collection.updateMany(query, dbOp.getUpdateJsonFormat(data), getUpdatedJsonInResponse(true)).exec()
    return response
  } catch (error) {
    throw error
  }
}

const deleteData = async (query, collection) => {
  try {
    const response = await collection.remove(query).exec()
    return response
  } catch (error) {
    throw error
  }

}

const insertData = async (data, collection) => {
  const response = await collection.insertMany(data)
  return response
}

const updateOne = async (query, data, collection) => {
  try {
    const updateJson = dbOp.getUpdateJsonFormat(data)
    const response = await collection.update(query, updateJson)
    return response
  } catch (error) {
    throw error
  }
}

const getDataWithAggregate = async (query, collection) => {
  try {
    const response = await collection.aggregate(query)
    return response
  } catch (error) {
    throw error
  }
}

module.exports = {
  getData,
  updateData,
  deleteData,
  insertData,
  updateOne,
  getDataWithAggregate
}