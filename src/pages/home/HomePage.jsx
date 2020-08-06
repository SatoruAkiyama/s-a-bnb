import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBox from "../../components/search-box/SearchBox";
import Spinner from "../../components/spinner/Spinner";
import Cities from "../../components/cities/Cities";

import "./HomePage.scss";

const HomePage = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getRecommendedCities = async () => {
      const recommendedCities = await axios.get(
        `${window.apiHost}/cities/recommended`
      );
      setCities(recommendedCities.data);
    };

    getRecommendedCities();
  }, []);

  if (cities.length === 0) {
    return <Spinner />;
  }
  return (
    <>
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
      <div className="container">
        <div className="container-fluid lower-fold">
          <div className="row">
            <div className="col s12">
              <Cities cities={cities} text="Recommended Cities" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
