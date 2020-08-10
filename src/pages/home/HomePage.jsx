import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBox from "../../components/search-box/SearchBox";
import Spinner from "../../components/spinner/Spinner";
import Footer from "../../components/footer/Footer";
import Cities from "../../components/cities/Cities";
import Activities from "../../components/activities/Activities";
import Venues from "../../components/venues/Venues";

import { fetchCollectionsStart } from "../../redux/main-data/mainDataActions";
import {
  selectActivities,
  selectActivityMore,
  selectAsia,
  selectCities,
  selectEurope,
  selectExotic,
  selectRecVenues,
} from "../../redux/main-data/mainDataSelector";

import "./HomePage.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const cities = useSelector(selectCities);
  const europe = useSelector(selectEurope);
  const asia = useSelector(selectAsia);
  const exotic = useSelector(selectExotic);
  const activities = useSelector(selectActivities);
  const recVenues = useSelector(selectRecVenues);
  const activityMore = useSelector(selectActivityMore);

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  if (cities === null) {
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
