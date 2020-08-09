import React, { useEffect, useState } from "react";
import axios from "axios";

import Venues from "../../components/venues/Venues";
import Spinner from "../../components/spinner/Spinner";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/page-header/PageHeader";

import { CITY_PIC } from "../../data/cityPicData";

const CityVenues = ({ match }) => {
  const [cityVenueInfo, setCityVenueInfo] = useState({
    header: "",
    venues: [],
  });

  const { header, venues } = cityVenueInfo;

  const url = `${window.apiHost}/city/${match.params.cityId}`;

  useEffect(() => {
    const getCityVenueInfo = async () => {
      const res = await axios.get(url);
      setCityVenueInfo({
        ...cityVenueInfo,
        header: res.data.header,
        venues: res.data.venues,
      });
    };
    getCityVenueInfo();
    // eslint-disable-next-line
  }, [url]);

  let city = match.params.cityId;
  if (match.params.cityId === "Kuala%20Lumpur") {
    city = "KUALALUMPUR";
  } else if (match.params.cityId === "rio%20de%20janeiro") {
    city = "RIODEJANEIRO";
  }

  if (!header || !venues) {
    return <Spinner />;
  }
  return (
    <>
      <div className="page-header-container fade-in">
        <PageHeader title={city.toUpperCase()} imageUrl={CITY_PIC[city]} />
      </div>
      <div
        className="container fade-in-delay mb-l"
        style={{ marginTop: `60px` }}
      >
        <div className="container-fluid lower-fold">
          <div className="row">
            <div className="cal s12">
              <Venues venues={venues} text={header.toUpperCase()} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CityVenues;
