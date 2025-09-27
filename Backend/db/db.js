const mongoose = require('mongoose');

const connecttodb = async (ConnectionLink) =>{
    try{
       await mongoose.connect(ConnectionLink);
    }
    catch(err){
        console.log("Error Connecting to MongoDb :", err );
    }
    finally{
        console.log("Db Connected Successfully.")
    }
}

module.exports = {connecttodb}