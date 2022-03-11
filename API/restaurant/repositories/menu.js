const { ObjectId } = require("mongodb");

const mongodb = require("../../config/mongodb");


exports.add = (item, callback) => {
    // Step 2 : Get the collection.
    const collection = mongodb.getCollection("Menu");

    // Step 3 : Add your data to collection.

    collection.insertOne({
        name: item.name, price: item.price,
        type: item.type, restaurantId: item.restaurantId, detail: item.detail,
        imageURL: item.imageURL, isVeg: item.isVeg
    })
        .then(() => {
            callback();
        })

        .catch(err => { console.log(err) });
}



exports.getByRestaurantID = (restaurantID, callback) => {
    const collection = mongodb.getCollection("Menu");
    collection.find({ restaurantID: restaurantID }).toArray().then(
        (menus) => {
            callback(menus);
        },
        err => {
            console.log(err);
        }
    )
}



// exports.deleteRestaurant = (restaurantID, callback) => {
//     const collection = mongodb.getCollection("Menu");
//     collection.findOneAndDelete({ restaurantID: restaurantID })
//       .then(
//         () => {
//           callback()
//         },
//         err => { console.log(err); }
//       )
//   }