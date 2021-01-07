const mongoose = require('mongoose');
require('dotenv').config();
 
mongoose.Promise = global.Promise;
 
// DB CONNECTIONS
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false 
    }).then(() => {
        console.log("DB CONNECTED");
    }).catch( (error) =>{
        console.log("Error occured in DB", error)}
    );
    
module.exports = mongoose;