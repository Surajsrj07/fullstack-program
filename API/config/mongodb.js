


//Import Mongodb

const mongodb = require("mongodb");

const url ="mongodb+srv://test:test@cluster0.p504t.mongodb.net/restaurantDB?retryWrites=true&w=majority"

const mongodbclient = mongodb.MongoClient;


exports.connect = ()=>{
    mongodbclient.connect(url)
    .then((client)=>{
        console.log("DB Connected");

    })
    .catch(err=>{console.log(err)});
}