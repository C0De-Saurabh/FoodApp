
import { CDN_LINKS } from "../utils/mockData";
import React from "react";
const ResCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    area,
    costForTwo,
    avgRating,
  }) => {
    return (
      <div className="ResCard">
        <img alt="RestaurantIcon"
          src={CDN_LINKS+
            cloudinaryImageId
          }
        />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{area}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
      </div> 
    );
  };

export default ResCard;