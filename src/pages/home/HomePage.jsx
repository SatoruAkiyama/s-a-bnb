import React from "react";

import SearchBox from "../../components/search-box/SearchBox";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="home-page col s12">
          <div className="upper-fold">
            <div className="container">
              <h1 className="right">Find Your World.</h1>
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
