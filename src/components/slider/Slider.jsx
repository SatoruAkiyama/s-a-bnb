import React from "react";
import SlickSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Slider.scss";

const Slider = ({ elements }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    auto: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slick">
      <SlickSlider {...settings}>{elements}</SlickSlider>
    </div>
  );
};

export default Slider;
