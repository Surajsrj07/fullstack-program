

//Trying to add Restaurant

const Restaurant = require("../models/restaurants");

exports.addRestaurants = (req, res)=>{
    console.log(req.body);

    const newRestaurant = new Restaurant(null, req.body.name, req.body.location, req.body.website, req.body.contact);
    res.send("Data Received");
}

   