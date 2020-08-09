import React from "react";

import "./PageHeader.scss";

const PageHeader = ({ imageUrl, title }) => {
  return (
    <>
      <div className="page-header phone">
        <img src={imageUrl} alt="" />
        <h1>{title}</h1>
      </div>
      <div className="page-header pc">
        <div className="page-header__img">
          <img src={imageUrl} alt="" />
        </div>
        <div className="page-header__text">
          <h1>{title}</h1>
          <h2>S-A-bnb</h2>
        </div>
        <div className="page-header__card" />
      </div>
    </>
  );
};

export default PageHeader;
