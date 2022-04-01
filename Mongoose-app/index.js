const express = require("express");
const mongooseConfig = require("./config/mongodb");

const restaurantRoutes = require("../Mongoose-app/src/restaurant/routes/restaurant");
const menuRoutes = require("../Mongoose-app/src/restaurant/routes/menu")

const bodyParser = require("body-Parser")

const server = express();

mongooseConfig.connect();

server.listen(3300);

//Middleware
server.use(bodyParser.json());

server.use("/api/restaurant", restaurantRoutes);
server.use("/api/menu",  menuRoutes);



server.get("/",(req, res)=>{
    res.send("Welcome to Mongoose");
});