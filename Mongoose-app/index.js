const express = require("express");
const mongooseConfig = require("./config/mongodb");
const restaurantRoutes = require("../Mongoose-app/src/restaurant/routes/restaurant");
const menuRoutes = require("../Mongoose-app/src/restaurant/routes/menu");
const bodyParser = require("body-Parser");
const userRoutes = require("./src/restaurant/routes/user");
const auth = require("./src/middlewares/auth");



const server = express();

mongooseConfig.connect();

server.listen(3300);

//Middleware
server.use(express.json());  //or bodyParser

server.use("/api/restaurant",auth , restaurantRoutes);
server.use("/api/menu",  menuRoutes);
server.use("/api/user",  userRoutes);



server.get("/",(req, res)=>{
    res.send("Welcome to Mongoose");
});