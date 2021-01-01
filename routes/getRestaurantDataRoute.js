'use strict'

const express = require('express')
const router = express.Router()
const { restaurantController } = require('../controller/getRestaurantData')

router.get('/get/all/restaurant/data', restaurantController)

module.exports = router