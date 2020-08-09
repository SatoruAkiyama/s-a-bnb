import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchBox from "../../components/search-box/SearchBox";
import Spinner from "../../components/spinner/Spinner";
import Footer from "../../components/footer/Footer";
import Cities from "../../components/cities/Cities";
import Activities from "../../components/activities/Activities";
import Venues from "../../components/venues/Venues";

import "./HomePage.scss";

const HomePage = () => {
  const [allData, setAllData] = useState({
    cities: [],
    europe: {},
    asia: {},
    exotic: {},
    activities: [],
    recVenues: {},
    activitiesDiving: [],
    activitiesBaking: [],
    activitiesScenery: [],
  });

  const {
    cities,
    europe,
    asia,
    exotic,
    activities,
    recVenues,
    activitiesDiving,
    activitiesBaking,
    activitiesScenery,
  } = allData;

  const citiesUrl = `${window.apiHost}/cities/recommended`;
  const europeUrl = `${window.apiHost}/cities/europe`;
  const asiaUrl = `${window.apiHost}/cities/asia`;
  const exoticUrl = `${window.apiHost}/cities/exotic`;
  const activitiesUrl = `${window.apiHost}/activities/today`;
  const recVenuesUrl = `${window.apiHost}/venues/recommended`;
  const activitiesDivingUrl = `${window.apiHost}/activities/diving`;
  const activitiesBakingUrl = `${window.apiHost}/activities/baking`;
  const activitiesSceneryUrl = `${window.apiHost}/activities/scenery`;

  const promiseArray = [];

  promiseArray.push(axios.get(citiesUrl));
  promiseArray.push(axios.get(europeUrl));
  promiseArray.push(axios.get(asiaUrl));
  promiseArray.push(axios.get(exoticUrl));
  promiseArray.push(axios.get(activitiesUrl));
  promiseArray.push(axios.get(recVenuesUrl));
  promiseArray.push(axios.get(activitiesDivingUrl));
  promiseArray.push(axios.get(activitiesBakingUrl));
  promiseArray.push(axios.get(activitiesSceneryUrl));

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
          recVenues: data[5].data,
          activitiesDiving: data[6].data,
          activitiesBaking: data[7].data,
          activitiesScenery: data[8].data,
        })
      );
    };

    getData();
    // eslint-disable-next-line
  }, []);

  const activityMore = [
    ...activitiesBaking.slice(1, 2),
    ...activitiesDiving,
    ...activitiesScenery.slice(1, 2),
  ];

  if (cities.length === 0) {
    return <Spinner />;
  }
  return (
    <>
      <div className="container-fluid fade-in">
        <div className="row">
          <div className="home-page col s12">
            <div className="upper-fold">
              <div className="container">
                <h1 className="right">Live the world.</h1>
                <SearchBox />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container fade-in-delay">
        <div className="container-fluid lower-fold">
          <div className="row">
            <div className="col s12 mb-ll">
              <Cities cities={cities} text="Recommended Cities" />
            </div>
            <div className="cal s12  mb-ll">
              <Venues venues={recVenues.venues} text={recVenues.header} />
            </div>
            <div className="col s12  mb-ll">
              <Activities activities={activities} text="Popular Activities" />
            </div>
            <div className="col s12  mb-ll">
              <Cities cities={europe.cities} text={europe.header} />
            </div>
            <div className="col s12  mb-ll">
              <Cities cities={asia.cities} text={asia.header} />
            </div>
            <div className="col s12  mb-ll">
              <Cities cities={exotic.cities} text={exotic.header} />
            </div>
            <div className="col s12  mb-ll">
              <Activities activities={activityMore} text="More Activities" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
