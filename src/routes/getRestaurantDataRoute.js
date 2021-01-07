'use strict'

const express = require('express')
const router = express.Router()
const urlCons = require('../constants/url-constants')
const { getRestaurantDataController } = require('../controller/getRestaurantDataController')

router.post(urlCons.URL_POST_FETCH_ALL_RESTAURANT_DATA, getRestaurantDataController)

module.exports = router