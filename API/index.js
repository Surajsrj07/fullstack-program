//1.Import Express.

const express = require("express");

const bodyParser = require("body-Parser");

const cors = require("cors");

//Import Routes

const restaurantRoutes = require("./restaurant/routes/api-restaurant");

const menuRoutes = require("./restaurant/routes/api-menu");

const mongodb = require("./config/mongodb");

mongodb.connect();

//2.creating a server

const server = express();

server.use(cors());

//3.Assigning port to a server

server.listen("3200");

//5.Handle api requests
server.use(bodyParser.json());
//server.use method takes all request methods
server.use("/api/restaurant", restaurantRoutes);
server.use("/api/menu", menuRoutes);


//4.Handle default request from client

server.get("/",(req, res)=>{
    res.send("Hello from Express");
})

console.log("Express is listening on 3200"); 

