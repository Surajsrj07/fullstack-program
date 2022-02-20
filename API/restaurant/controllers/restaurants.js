


const Restaurant = require("../models/restaurants");

const repo = require("../repositories/restaurants");

const url = require("url");

//Trying to add Restaurant


exports.addRestaurants = (req, res) => {
    console.log(req.body);

    const newRestaurant =
        new Restaurant(null, req.body.name, req.body.location, req.body.website, req.body.contact);

    repo.add(newRestaurant, () => {
        res.send("Data added");
    })

}


//trying to get all restuarant name

exports.getAllRestaurants = (req, res) => {
    repo.getAll((restaurants) => {
        res.send(restaurants);
    })
}


//get by id

exports.getRestaurantById = (req, res) => {
    const id = req.params.id;
    repo.getByID(id, (restaurant) => {
        res.send(restaurant);
    })
}


//Location

exports.getRestaurantsByLocation = (req, res) => {
    const loc = req.params.loc;
    console.log(loc);  //debugging
    repo.getByLocation(loc, (restaurants) => {
        res.send(restaurants);
    }
    )
}

//update Restaurant
exports.updateRestaurant = (req, res) => {
    console.log(req.body);
    const restaurantToUpdate =
        new Restaurant(req.body._id, req.body.name,
            req.body.location, req.body.website, req.body.contact);
    repo.updateRestaurant(restaurantToUpdate, () => {
        console.log("Data Updated");
        repo.getByID(restaurantToUpdate.id, (restaurant) => {
            res.send(restaurant);
        })
    })
}


// Delete Restauarant
exports.deleteRestaurant = (req, res)=>{
    const id = req.params.id;
    repo.deleteRestaurant(id, ()=>{
        res.send("Restaurant deleted");
    })
}

//search Restaurant

exports.searchRestaurant = (req, res)=>{
    const key = req.params.key;
    console.log(key);
    repo.search(key, (restaurants)=>{
        res.send(restaurants);
    })
}

//filter Restaurant

exports.filterRestaurant =(req, res)=>{
    const params = url.parse(req.url, true).query;
    console.log(params);
    if(!params.name){
        repo.getByLocation(params.location, (restaurants)=>{
            res.send(restaurants);
        })
    }
    repo.filterRestaurant(params.location, params.name, (result)=>{
        res.send(result);
    });
}