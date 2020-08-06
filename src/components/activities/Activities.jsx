import React from "react";

import Activity from "../activity/Activity";

const Activities = ({ activities, text }) => {
  return (
    <div className="activities">
      <h1 className="main-header-text">{text}</h1>
      {activities.map(({ id, ...otherProps }) => (
        <div className="col s6 m4 l2" key={id} style={{ minHeight: `370px` }}>
          <Activity {...otherProps} id={id} />
        </div>
      ))}
    </div>
  );
};

export default Activities;
