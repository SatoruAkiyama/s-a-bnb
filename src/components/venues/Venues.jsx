import React from "react";

import Venue from "../venue/Venue";

const Venues = ({ venues, text }) => {
  return (
    <div className="venues">
      <h1 className="main-header-text">{text}</h1>
      {venues.map(({ id, ...otherProps }) => (
        <div key={id} className="col s12 m6 l4 xl3">
          <Venue {...otherProps} id={id} />
        </div>
      ))}
    </div>
  );
};

export default Venues;
