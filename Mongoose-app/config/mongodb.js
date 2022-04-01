const mongoose = require("mongoose");

const url = "mongodb+srv://test:test@fullstackprogram.p504t.mongodb.net/restaurantMongooseDB?retryWrites=true&w=majority"

exports.connect = async()=>{
try{
    const result = await mongoose.connect(url);
    console.log("Mongoose Connected");
}

catch(err){
    console.log(err);
}

}