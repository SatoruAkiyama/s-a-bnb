import React from "react";

import City from "../city/City";
import Slider from "../slider/Slider";

const Cities = ({ cities, text }) => {
  const elements = cities.map((city, i) => (
    <div className="col s3" key={i}>
      <City city={city} />
    </div>
  ));
  return (
    <>
      <h1 className="main-header-text">{text}</h1>
      <Slider elements={elements} />
    </>
  );
};

export default Cities;
