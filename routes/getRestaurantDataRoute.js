'use strict'

const express = require('express')
const router = express.Router()
const { restaurantController } = require('../controller/getRestaurantData')

router.get('/get/data', restaurantController)

module.exports = router