'use strict'

const msgCons = require('../constants/msg-constants')

const responseGenerator = (data, status, message, error) => {
  const response = {}
  response[msgCons.FIELD_DATA] = data
  response[msgCons.FIELD_STATUS_CODE] = status
  response[msgCons.FIELD_STATUS_MSG] = message
  response[msgCons.FIELD_ERROR_STATUS] = error
  return response
}

const errorGenerator = (data, status, message, error) => {
  const response = {}
  response[msgCons.FIELD_DATA] = data
  response[msgCons.FIELD_STATUS_CODE] = status
  response[msgCons.FIELD_ERROR_STATUS] = error
  response[msgCons.FIELD_ERROR_MSG] = message
  return response
}

module.exports = {
  responseGenerator,
  errorGenerator
}