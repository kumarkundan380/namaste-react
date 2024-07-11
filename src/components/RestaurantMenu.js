import { useState, useEffect } from "react";
import { REATAURATNS_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [menuItem, setMenuItem] = useState(null);
    const { restaurantId } = useParams();

    useEffect(()=> {
        fetchMenu();
    }, []);

    const fetchMenu = async ()=> {
        const data = await fetch(REATAURATNS_MENU_URL+restaurantId);
        const jsonData = await data.json();
        setRestaurantInfo(jsonData?.data?.cards[2]?.card?.card?.info);
        setMenuItem(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel);
    }

    if(restaurantInfo == null) {
        return <Shimmer />
    }

    const {name, cuisines, costForTwoMessage} = restaurantInfo;
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {menuItem.map((menu) => <li key={menu?.dish?.info?.id}>{menu?.dish?.info?.name} - {"Rs."}{menu?.dish?.info?.price/100 || menu?.dish?.info?.defaultPrice/100}.00</li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
