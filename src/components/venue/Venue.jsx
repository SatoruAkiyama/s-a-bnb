import React from "react";
import { Link } from "react-router-dom";

import "./Venue.scss";

const Venue = ({ id, imageUrl, location, pricePerNight, rating, title }) => {
  return (
    <div className="venue">
      <Link to={`/venue/${id}`}>
        <div className="image">
          <img src={imageUrl} alt={imageUrl} />
        </div>
        <div className="location-stars">
          <span className="location">{location}</span>
        </div>
        <div className="title">{title} </div>
        <div className="price">
          <span className="price-per-night">${pricePerNight}/night</span>
          <span className="rating right">
            <i className="material-icons">star</i>
            {rating}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Venue;
