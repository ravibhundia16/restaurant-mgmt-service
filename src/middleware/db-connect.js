const mongoose = require('mongoose')
require('dotenv').config()
 
mongoose.Promise = global.Promise
 
// DB CONNECTIONS
mongoose.connect(process.env.DATABASE,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false 
  }).then(() => {
    console.log('DB Connected Successfully')
  }).catch((error) => {
    console.log('Error While Connecting to DB', error)
  })
  
module.exports = mongoose