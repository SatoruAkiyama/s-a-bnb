import React from "react";

import City from "../city/City";
import Slider from "../slider/Slider";

const Cities = ({ cities, text }) => {
  const elements = cities.map(({ id, ...otherProps }) => (
    <div className="col s3" key={id}>
      <City {...otherProps} id={id} />
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
