'use strict'
const { responseGenerator } = require('../constants/responseGenerator')
const resSchema = require('../models/restaurants')

const restaurantController = async (req, res) => {
    try {
        let data = await resSchema.find({}).then(res => {
            return res
        }).catch(error => {
            throw error
        })
        responseGenerator(res, data, 200, 'Data Fetch Successfully', false)
    } catch (error) {
        throw error
    }
}

module.exports = {
    restaurantController
}