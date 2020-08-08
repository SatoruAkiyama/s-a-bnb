import React, { useEffect, useState } from "react";
import axios from "axios";

import Spinner from "../../components/spinner/Spinner";
import Cities from "../../components/cities/Cities";
import Activities from "../../components/activities/Activities";
import Venues from "../../components/venues/Venues";

import "../home/HomePage.scss";

const SearchPage = ({ match }) => {
  const [searchData, setSearchData] = useState({
    cities: [],
    activities: [],
    venues: [],
    waiting: true,
  });
  const { cities, activities, venues, waiting } = searchData;

  const searchTerm = match.params.searchTerm;
  const url = `${window.apiHost}/search/${searchTerm}`;

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(url);
      setSearchData({
        ...searchData,
        cities: res.data.cities,
        activities: res.data.activities,
        venues: res.data.venues,
        waiting: false,
      });
    };
    getData();
    // eslint-disable-next-line
  }, [url]);

  if (waiting) {
    return <Spinner />;
  }

  console.log(cities, venues);

  return (
    <div className="container fade-in-delay" style={{ marginTop: `60px` }}>
      <div className="container-fluid lower-fold">
        <div className="row">
          <div className="col s12 mb-ll">
            {cities.length === 0 ? (
              <h1 className="main-header-text">
                There is not veune matching your search
              </h1>
            ) : (
              <Cities cities={cities} text="Cities Matching your search" />
            )}
          </div>
          <div className="col s12  mb-ll">
            {venues.length === 0 ? (
              <h1 className="main-header-text">
                There is not veune matching your search
              </h1>
            ) : (
              <Venues venues={venues} text="Venues Matching your search" />
            )}
          </div>
          <div className="col s12  mb-ll">
            {activities.length === 0 ? (
              <h1 className="main-header-text">
                There is not activity matching your search
              </h1>
            ) : (
              <Activities
                activities={activities}
                text="Activities Matching your search"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
