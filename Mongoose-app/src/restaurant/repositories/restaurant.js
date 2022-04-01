const menu = require("../models/menu");
const Restaurant = require("../models/restaurant");


exports.add = async (restaurant)=>{
    try{
        const result = Restaurant.create(restaurant);
        return result;
    }
    catch(err){
        console.log(err);
    }
}


exports.getAll = async()=>{
    const result = Restaurant.aggregate(
        [
            {
                $lookup:{
                    from :"menus",
                    localField : "_id",
                    foreignField :"restaurantID",
                    pipeline : [
                        { $match :{isVeg : true}},   //it returns veg restaurants only;if false returns non-veg 
                        { $project : {restaurantID : 0}}  //Pipeline = if we don't want any of the element here it could be used 
                    ],
                    as : "_menus"

                }
            }
        ]
    );
    return result;

}