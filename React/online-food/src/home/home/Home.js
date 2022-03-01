import "./Home.css";
import Header from "../header/Header";
import { useEffect, useState } from "react";
import RestaurantCard from "../../Restaurant-card/Restaurant";

function Home() {

    //Mantaining states in component

    var [restaurants, setRestaurants] = useState([]);


    //Lifecycle Hook get executed,when component is ready
    useEffect(()=>{
        fetch("http://localhost:3200/api/Restaurant")
            .then(res=> res.json())
            .then(
                (result)=>{
                    result=result.filter(r=> r.name);
                    setRestaurants(result);
                }
            );
    }, []);


    function filterRestaurant(event){
        const location = (event.target.value);
        fetch("http://localhost:3200/api/Restaurant/Filter?location="+location)
            .then(res=> res.json())
            .then(
                (result)=>{
                    result=result.filter(r=> r.name);
                    setRestaurants(result);
                }
            );
    }


  
    return(
        <div>
             <Header change={(event)=>filterRestaurant(event)}/>
            <div className="row">
                <div className="col-md-3 filter"></div>
                <div className="col-md-9 result-container">
                    {/* This is possible because of JSX */}
                    {
                        restaurants.length>0 &&
                        restaurants.map(r=>
                            <RestaurantCard item={r} />
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;