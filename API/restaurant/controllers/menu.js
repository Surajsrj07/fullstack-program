const MenuModel = require("../models/menu");

const repo = require("../repositories/menu");

//Add menus in Restaurant

 exports.add = (req, res)=>{


    const body = req.body;
    const newMenu = new MenuModel(body.name, body.price, body.type, body.restaurantID, body.detail, body.imageURL, body.isVeg);

    repo.add(newMenu, ()=>{
        res.status(200).send("Menu is Created");
    })

}


//Get Menus of Restaurant

exports.getByRestaurantID = (req, res)=>{
    const restaurantID = req.params.id;
    repo.getByRestaurantID(restaurantID, (menus)=>{
        res.status(200).send(menus);
    })
}



// exports.deleteRestaurant = (req, res)=>{
//     const id = req.params.id;
//     repo.deleteRestaurant(restaurantID , ()=>{
//         res.send("Menu deleted");
//     })
// }