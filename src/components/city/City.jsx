import React from "react";

import "./City.scss";

const City = ({ city }) => {
  const { cityName, image, price } = city;
  return (
    <div className="city s12">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="city-name">{cityName}</div>
      <div className="price">${price}/night average</div>
    </div>
  );
};

export default City;
