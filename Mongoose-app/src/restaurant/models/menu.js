//1)Import mongoose

const mongoose = require("mongoose");


//2)Create Schema for Menu

const MenuSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        type: String,
        detail: String,
        imageURL:String,
        isVeg:Boolean,
        restaurantID: {type:mongoose.Types.ObjectId, ref: 'Restaurant'}


    }
);


//menus (This is mongoose standard)

const menu = mongoose.model("Menu", MenuSchema);

module.exports = menu;