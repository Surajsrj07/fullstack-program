const { ObjectId } = require("mongodb");

const mongodb = require("../../config/mongodb");


exports.add = (item, callback) => {
  // Step 2 : Get the collection.
  const collection = mongodb.getCollection("Restaurant");

  // Step 3 : Add your data to collection.

  collection.insertOne({ name: item.name, contact: item.contact, website: item.website, location: item.location })
    .then(() => {
      callback();
    })

    .catch(err => { console.log(err) });
}


exports.getAll = (callback) => {
  //get the collection
  const collection = mongodb.getCollection("Restaurant");
  //add data to collection
  collection.find().toArray().then(
    (restaurants) => {
      callback(restaurants);
    },
    err => {
      console.log(err);
    })

}

exports.getByID = (id, callback) => {
  const collection = mongodb.getCollection("Restaurant");
  collection.findOne({ _id: ObjectId(id) }).then(
    (restaurants) => {
      callback(restaurants);
    },
    err => {
      console.log(err);
    }
  )
}


exports.getByLocation = (location, callback) => {
  const collection = mongodb.getCollection("Restaurant");
  collection.find({ location: location }).toArray().then(
    (restaurants) => {
      callback(restaurants);
    },
    err => {
      console.log(err);
    }
  )
}

exports.updateRestaurant = (restaurant, callback) => {
  const collection = mongodb.getCollection("Restaurant");
  const filter = { _id: ObjectId(restaurant.id) };
  const update = { $set: { name: restaurant.name, location: restaurant.location, website: restaurant.website } };
  collection.findOneAndUpdate(filter, update).then(
    () => {
      callback();
    },
    err => {
      console.log(err);
    }
  )
}


exports.deleteRestaurant = (id, callback) => {
  const collection = mongodb.getCollection("Restaurant");
  collection.findOneAndDelete({ _id: ObjectId(id) })
    .then(
      () => { callback()
       },
      err => { console.log(err); }
    )
}


exports.searchString = (search, callback)=>{
  const collection = mongodb.getCollection("Restaurant");
  collection.find({name: {$regex:search}}).toArray().then(
      (restaurant)=>{
          callback(restaurant);
      },
      err=>{
          console.log(err);
      }
  )
}
