import "./Restaurant.css"
import {useNavigate} from "react-router-dom";

function RestaurantCard(props) {

    //access item properties passed into component
    // and stored in a const
    const restaurant = props.item;
    const navigate = useNavigate();


    const redirectToDetail=(event)=>{
        navigate("restaurant/"+event)

    }
//restaurant/id
    return (
        <a href="" onClick={()=>redirectToDetail(restaurant._id)}>
        <div className="card">
            <div className="row">
                <div className="col-md-3">
                    <img className="rounded" src="https://th.bing.com/th/id/OIP.WleMKxd3t8DRFeUa86m1JgHaE8?w=281&h=187&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt=""></img>
                </div>
                <div className="col-md-9">
                    <p>{restaurant.name}</p>
                    <p>Location:{restaurant.location}</p>
                    <p>{restaurant.website}</p>

                </div>
            </div>
        </div>
        </a>
    )
}

export default RestaurantCard;