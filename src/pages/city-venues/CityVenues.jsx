import React, { useEffect, useState } from "react";
import axios from "axios";

import Venues from "../../components/venues/Venues";
import Spinner from "../../components/spinner/Spinner";
import Footer from "../../components/footer/Footer";

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

  if (!header || !venues) {
    return <Spinner />;
  }
  return (
    <>
      <div
        className="container fade-in-delay mb-l"
        style={{ marginTop: `60px` }}
      >
        <div className="container-fluid lower-fold">
          <div className="row">
            <div className="cal s12">
              <Venues venues={venues} text={header} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CityVenues;
