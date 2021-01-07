'use strict'

const msgCons = require('../constants/msg-constants')
const { responseGenerator } = require('../constants/responseGenerator')
const { getRestaurantData } = require('../services/getRestaurantData')

const getRestaurantDataController = async(req, res) => {
  try {
    const query = req.body.query ? req.body.query : {}
    const collection = req.body.get_data
    const response = await getRestaurantData(collection, query)
    if (response && Array.isArray(response) && response.length > 0) {
      responseGenerator(res, response, msgCons.CODE_SERVER_OK, msgCons.MSG_SUCCESS_FETCHED_DATA, false)
    } else {
      responseGenerator(res, [], msgCons.CODE_NO_CONTENT_AVAILABLE, msgCons.MSG_ERROR_NO_DATA, false)
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
  getRestaurantDataController
}