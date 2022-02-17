


//Import Mongodb

const mongodb = require("mongodb");

const url = "mongodb+srv://test:test@fullstackprogram.p504t.mongodb.net/restaurantDB?retryWrites=true&w=majority"

const mongodbclient = mongodb.MongoClient;

var connectedClient;


exports.connect = () => {
    mongodbclient.connect(url)
        .then((client) => {
            connectedClient = client;
            console.log("DB Connected");

        })
        .catch(err => { console.log(err) });
}

exports.getCollection = (nameOfCollection) => {
 return connectedClient.db('restaurantDB').collection(nameOfCollection);

}

