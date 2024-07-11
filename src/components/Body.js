import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { REATAURATN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    
    const [restaurantList, setRestaurantList] = useState([]);
    const [filterResturents, setFilterResturents] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(()=> {
        fetchData();
    },[])
    
    const fetchData = async () => {
        const data = await fetch(REATAURATN_URL);
        const jsonData = await data.json();
        setRestaurantList(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterResturents(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return restaurantList.length == 0 ? <Shimmer /> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(event) => {
                        setSearchText(event.target.value);
                    }} />
                    <button onClick={()=> {
                        const filterdResturents = restaurantList.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilterResturents(filterdResturents);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filterRestaurantList = restaurantList.filter( (restaurant) => restaurant?.info.avgRating > 4);
                    setRestaurantList(filterRestaurantList);
                    }
                }>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
               {
                filterResturents.map(restaurant => (<Link key = {restaurant?.info.id} to = {"/restaurants/"+restaurant?.info.id} className="link" >
                    <RestaurantCard restaurant={restaurant} />
                </Link>)  
               )}
            </div>
        </div>
    );
};

export default Body;
