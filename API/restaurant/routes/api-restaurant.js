
//Step 1: Import Express

const express = require("express");

const controller = require("../controllers/restaurants");

//Step 2: Create Router

const router = express.Router();

// Step 3: configure route paths

router.post("/", controller.addRestaurants);

module.exports = router;

