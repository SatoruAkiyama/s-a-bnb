import React from "react";

import City from "../city/City";

const Cities = ({ cities }) =>
  cities.map((city, i) => (
    <div className="col s3" key={i}>
      <City city={city} />
    </div>
  ));

export default Cities;
