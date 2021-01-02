'use strict'

const { responseGenerator } = require('../constants/responseGenerator')
const restaurantSchema = require('../models/restaurants')
const cuisinesSchema = require('../models/cuisines')
const foodItemSchema = require('../models/food_items')
const mongo = require('mongodb').MongoClient
const url = 'mongodb+srv://dbavb786:Avb@90333@taskmanager-e8bqy.mongodb.net/moweb?retryWrites=true&w=majority'
let db, jobs

const restaurantController = async (req, res) => {
    try {
        const fetchDataFromDB = req.body.get_data
        const query = req.body.query ? req.body.query : {}
        let schemaName
        switch (fetchDataFromDB) {
            case 'restaurant':
                schemaName = restaurantSchema
                break;
            case 'cuisines':
                schemaName = cuisinesSchema
                break;
            case 'food_items':
                schemaName = foodItemSchema
                break;
        }
        const response = await getDetailsFromDB(query, schemaName)
        responseGenerator(res, response, 200, 'Data Fetch Successfully', false)
    } catch (error) {
        throw error
    }
}

async function getDetailsFromDB (query, schema) {
    let data = await schema.find(query).then(res => {
        return res
    }).catch(error => {
        throw error
    })
    return data
}

const insertQueryData = async (req, res) => {
    const dataToBeInsert = req.body.data
    mongo.connect(
        url,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        (err, client) => {
          if (err) {
            console.error(err)
            return
          }
          db = client.db('moweb')
          jobs = db.collection('food_items')
      
          const data = dataToBeInsert
          jobs.insertMany(data)
        }
    )
    responseGenerator(res, [], 200, 'Data Inserted Successfully', false)
}



module.exports = {
    restaurantController,
    insertQueryData
}