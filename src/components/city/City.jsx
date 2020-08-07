import React from "react";
import { Link } from "react-router-dom";

import "./City.scss";

const City = ({ cityName, image, price }) => {
  return (
    <div className="city s12">
      <Link to={`/city/${cityName}`}>
        <div className="city__image">
          <img src={image} alt="" />
        </div>
        <div className="city__content">
          <div className="city__name">{cityName}</div>
          <div className="city__price">${price}/ average</div>
        </div>
      </Link>
    </div>
  );
};

export default City;
