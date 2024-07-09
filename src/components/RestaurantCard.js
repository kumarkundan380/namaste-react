import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurant} = props
    return (
        <div className="restaurant-card" >
            <img className="restaurang-logo" alt="restaurang-logo" src={CDN_URL+restaurant.cloudinaryImageId}></img>
            <h3>{restaurant.name}</h3>
            <h4>{restaurant.cuisines.join(",")}</h4>
            <h4>{restaurant.avgRating} Stars</h4>
            <h4>{restaurant.costForTwo}</h4>
            <h4>{restaurant.sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;