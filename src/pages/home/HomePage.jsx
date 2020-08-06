import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBox from "../../components/search-box/SearchBox";
import Spinner from "../../components/spinner/Spinner";
import Cities from "../../components/cities/Cities";

import "./HomePage.scss";

const HomePage = () => {
  const [allData, setAllData] = useState({
    cities: [],
    europe: {},
    asia: {},
    exotic: {},
  });

  const { cities, europe, asia, exotic } = allData;

  const citiesUrl = `${window.apiHost}/cities/recommended`;
  const europeUrl = `${window.apiHost}/cities/europe`;
  const asiaUrl = `${window.apiHost}/cities/asia`;
  const exoticUrl = `${window.apiHost}/cities/exotic`;

  const citiesPromise = [];

  citiesPromise.push(axios.get(citiesUrl));
  citiesPromise.push(axios.get(europeUrl));
  citiesPromise.push(axios.get(asiaUrl));
  citiesPromise.push(axios.get(exoticUrl));
  useEffect(() => {
    const getData = async () => {
      Promise.all(citiesPromise).then((data) =>
        setAllData({
          ...allData,
          cities: data[0].data,
          europe: data[1].data,
          asia: data[2].data,
          exotic: data[3].data,
        })
      );
    };

    getData();
    // eslint-disable-next-line
  }, []);

  console.log(europe.cities);
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
