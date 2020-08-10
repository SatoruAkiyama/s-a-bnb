import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import SearchBox from "../../components/search-box/SearchBox";
import Spinner from "../../components/spinner/Spinner";
import Footer from "../../components/footer/Footer";
import Cities from "../../components/cities/Cities";
import Activities from "../../components/activities/Activities";
import Venues from "../../components/venues/Venues";

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
  const cities = useSelector(selectCities);
  const europe = useSelector(selectEurope);
  const asia = useSelector(selectAsia);
  const exotic = useSelector(selectExotic);
  const activities = useSelector(selectActivities);
  const recVenues = useSelector(selectRecVenues);
  const activityMore = useSelector(selectActivityMore);

  const otherInfo = [
    {
      id: 1,
      link: "/about-us",
      imageUrl:
        "https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "About us",
      text:
        "We are S-A-bnb. Our mission is making happy life for everyone. If you want to know about us, please find out more.",
    },
    {
      id: 2,
      link: "/recruit",
      imageUrl:
        "https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Recruit",
      text:
        "For now, we are looking for 6 types of jobs.  We need people who are passionate and really want to work with us.",
    },
  ];

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
          <div className="row mb-ll">
            <h1 className="main-header-text">Other Information</h1>
            {otherInfo.map(({ imageUrl, title, text, link, id }) => (
              <div className="col s12 m6" key={id}>
                <div className="card">
                  <div className="card-image">
                    <img src={imageUrl} alt="" />
                  </div>
                  <div className="card-content">
                    <p>{text}</p>
                  </div>
                  <div className="card-action center">
                    <Link to={link}>
                      <button
                        className="btn-large waves-effect waves-light  red accent-3"
                        type="submit"
                        name="action"
                        style={{
                          color: `#fff`,
                          width: `180px`,
                          fontWeight: `500`,
                        }}
                      >
                        {title}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img
                    src="https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                </div>
                <div class="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
                <div class="card-action">
                  <Link to="/about-us">About us</Link>
                </div>
              </div>
            </div>
            <div className="col s12 m6">
              <div class="card">
                <div class="card-image">
                  <img
                    src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                  />
                </div>
                <div class="card-content">
                  <p>
                    I am a very simple card. I am good at containing small bits
                    of information. I am convenient because I require little
                    markup to use effectively.
                  </p>
                </div>
                <div class="card-action">
                  <Link to="/about-us">Recruit</Link>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
