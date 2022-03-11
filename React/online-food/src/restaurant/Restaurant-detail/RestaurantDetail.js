import "./RestaurantDetail.css";

import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";

function RestaurantDetail(){

var [restaurant, setRestaurant] = useState();

const {id} = useParams();

useEffect(()=>{
  fetch("http://localhost:3200/api/Restaurant/"+id)
      .then(res=> res.json())
      .then(
          (result)=>{
              setRestaurant(result);
          }
      );
}, []);


return(

    <div className="container"> 
    <div className="banner"></div>

<h3 className="name">{restaurant ? restaurant.name : ''}</h3>

<button className="btn btn-danger float-end">Place Online Order</button>

<ul class="nav nav-tabs">
 
  <li class="nav-item">
    <a class="nav-link tab-name" data-bs-toggle="tab" href="#Overview">Overview</a>
  </li>
  <li class="nav-item">
    <a class="nav-link tab-name" data-bs-toggle="tab" href="#Contact">Contact</a>
  </li>
 
</ul>

<div className="tab-content">
    <div role="tabpanel" className="tab-pane active" id="Overview">

    <p>Address/Location:{restaurant ? restaurant.location : ''}</p>

    </div>
    <div role="tabpanel" className="tab-pane" id="Contact">
    <p>Website:{restaurant ? restaurant.website : ''}</p>
    <p>Contact:{restaurant ? restaurant.contact : ''}</p>
    </div>
</div>


  
    </div>

);

}

export default RestaurantDetail;