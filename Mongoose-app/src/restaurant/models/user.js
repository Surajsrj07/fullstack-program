//1)Import mongoose

const mongoose = require("mongoose");


//2)Create Schema for user

const userSchema = new mongoose.Schema(
    {
        username: String,
        password: String
        
    }
);


//users

const user = mongoose.model("User", userSchema);

module.exports = user;