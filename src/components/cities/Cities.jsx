import React from "react";

import City from "../city/City";
import Slider from "../slider/Slider";

const Cities = ({ cities, text }) => {
  const elements = cities.map(({ id, ...otherProps }) => (
    <div className="col s3" key={id}>
      <City {...otherProps} id={id} />
    </div>
  ));
  const { cityName, image, price } = cities[0];
  if (elements.length === 1) {
    return (
      <>
        <h1 className="main-header-text">{text}</h1>
        <div className="col s12 m6 l4">
          <City cityName={cityName} image={image} price={price} />
        </div>
      </>
    );
  }
  console.log(cities);
  return (
    <>
      <h1 className="main-header-text">{text}</h1>
      <Slider elements={elements} />
    </>
  );
};

export default Cities;
