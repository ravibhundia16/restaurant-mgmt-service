'use strict'

const express = require('express')
const router = express.Router()
const { restaurantController, insertQueryData } = require('../controller/getRestaurantData')

router.post('/get/all/restaurant/data', restaurantController)

router.post('/insert/data', insertQueryData)

module.exports = router