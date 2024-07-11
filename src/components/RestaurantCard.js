import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurant} = props
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = restaurant?.info;

    return (
        <div className="restaurant-card" >
            <img className="restaurang-logo" alt="restaurang-logo" src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString} minutes</h4>
        </div>
    )
}

export default RestaurantCard;