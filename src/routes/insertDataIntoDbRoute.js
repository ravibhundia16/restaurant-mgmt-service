'use strict'

const express = require('express')
const router = express.Router()
const urlCons = require('../constants/url-constants')
const { insertDataIntoDbController } = require('../controller/insertDataIntoDbController')

router.post(urlCons.URL_POST_INSERT_DATA_INTO_DB, insertDataIntoDbController)

module.exports = router