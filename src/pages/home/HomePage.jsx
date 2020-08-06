import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBox from "../../components/search-box/SearchBox";
import Spinner from "../../components/spinner/Spinner";
import Cities from "../../components/cities/Cities";
import Activities from "../../components/activities/Activities";

import "./HomePage.scss";

const HomePage = () => {
  const [allData, setAllData] = useState({
    cities: [],
    europe: {},
    asia: {},
    exotic: {},
    activities: [],
  });

  const { cities, europe, asia, exotic, activities } = allData;

  const citiesUrl = `${window.apiHost}/cities/recommended`;
  const europeUrl = `${window.apiHost}/cities/europe`;
  const asiaUrl = `${window.apiHost}/cities/asia`;
  const exoticUrl = `${window.apiHost}/cities/exotic`;
  const activitiesUrl = `${window.apiHost}/activities/today`;

  const promiseArray = [];

  promiseArray.push(axios.get(citiesUrl));
  promiseArray.push(axios.get(europeUrl));
  promiseArray.push(axios.get(asiaUrl));
  promiseArray.push(axios.get(exoticUrl));
  promiseArray.push(axios.get(activitiesUrl));

  useEffect(() => {
    const getData = async () => {
      Promise.all(promiseArray).then((data) =>
        setAllData({
          ...allData,
          cities: data[0].data,
          europe: data[1].data,
          asia: data[2].data,
          exotic: data[3].data,
          activities: data[4].data,
        })
      );
    };

    getData();
    // eslint-disable-next-line
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
              <Cities cities={cities} />
            </div>
            <div className="col s12">
              <Activities activities={activities} text="Activities" />
            </div>
            <div className="col s12">
              <Cities cities={europe.cities} text={europe.header} />
            </div>
            <div className="col s12">
              <Cities cities={asia.cities} text={asia.header} />
            </div>
            <div className="col s12">
              <Cities cities={exotic.cities} text={exotic.header} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
