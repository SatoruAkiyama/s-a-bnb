import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { selectCities } from "../../redux/main-data/mainDataSelector";

import Venues from "../../components/venues/Venues";
import Cities from "../../components/cities/Cities";
import Spinner from "../../components/spinner/Spinner";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/page-header/PageHeader";

import { CITY_PIC } from "../../data/cityPicData";

const CityVenues = ({ match }) => {
  const cities = useSelector(selectCities);

  const [cityVenueInfo, setCityVenueInfo] = useState({
    header: "",
    venues: [],
  });

  const [waiting, setWaiting] = useState(true);

  const { header, venues } = cityVenueInfo;

  const url = `${window.apiHost}/city/${match.params.cityId}`;

  useEffect(() => {
    const getCityVenueInfo = async () => {
      const res = await axios.get(url);
      await setCityVenueInfo({
        ...cityVenueInfo,
        header: res.data.header,
        venues: res.data.venues,
      });
      setWaiting(false);
    };
    getCityVenueInfo();

    return () => setWaiting(true);
    // eslint-disable-next-line
  }, [url]);

  let city;

  if (match.params.cityId === "Kuala Lumpur") {
    city = "KUALALUMPUR";
  } else if (match.params.cityId === "rio de janeiro") {
    city = "RIODEJANEIRO";
  } else {
    city = match.params.cityId;
  }

  console.log(match.params.cityId);

  if (waiting) {
    return <Spinner />;
  }
  return (
    <>
      <div className="page-header-container fade-in">
        <PageHeader title={city.toUpperCase()} imageUrl={CITY_PIC[city]} />
      </div>
      <div className="container fade-in-delay" style={{ marginTop: `60px` }}>
        <div className="container-fluid lower-fold">
          <div className="row">
            <div className="cal s12">
              <Venues venues={venues} text={header.toUpperCase()} />
            </div>
          </div>
        </div>
      </div>

      <div className="container fade-in-delay">
        <div className="container-fluid lower-fold">
          <div className="row">
            <div className="col s12 mb-ll">
              <Cities cities={cities} text="Popular Cities" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CityVenues;
