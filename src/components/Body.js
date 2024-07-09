import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";

const Body = () => {
    
    const [restaurantList, setRestaurantList] = useState(restaurants);
    
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterRestaurantList = restaurantList.filter( (restaurant) => restaurant.avgRating > 4);
                    setRestaurantList(filterRestaurantList);
                }
                
                }>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
               {
                restaurantList.map(restaurant => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
               }
            </div>
        </div>
    )
}

export default Body;
