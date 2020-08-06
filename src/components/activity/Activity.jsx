import React from "react";
import { Link } from "react-router-dom";

import "./Activity.scss";

const Activity = ({
  activityType,
  cost,
  image,
  rating,
  title,
  totalRatings,
  id,
}) => {
  return (
    <div className="activity">
      <Link to={`/activity/${id}`}>
        <img src={image} alt="" />
        <div className="activity__type">{activityType}</div>
        <div className="activity__title">{title}</div>
        <div className="activity__cost">From ${cost}/person</div>
        <div className="activity__rating">
          <i className="material-icons">star</i>
          {rating} ({totalRatings})
        </div>
      </Link>
    </div>
  );
};

export default Activity;
