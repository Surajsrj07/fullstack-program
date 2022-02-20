
//Step 1: Import Express

const express = require("express");

const controller = require("../controllers/restaurants");

//Step 2: Create Router

const router = express.Router();

// Step 3: configure route paths
router.get("/Filter", controller.filterRestaurant);
router.post("/", controller.addRestaurants);
router.get("/", controller.getAllRestaurants);
router.get("/:id", controller.getRestaurantById);
router.get("/location/:loc", controller.getRestaurantsByLocation);
router.put("/", controller.updateRestaurant);
router.delete("/:id", controller.deleteRestaurant);
router.get("/search/:key", controller.searchRestaurant);


module.exports = router; 

