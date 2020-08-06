import React, { useEffect, useState } from "react";

import axios from "axios";

import Points from "../../components/point/Point";

import "./SingleFullVenue.scss";

const SingleFullVenue = ({ match }) => {
  const [venueInfo, setVenue] = useState({});
  const [points, setPoints] = useState([]);

  const venueUrl = `${window.apiHost}/venue/${match.params.venueId}`;
  const pointsUrl = `${window.apiHost}/points/get`;

  useEffect(() => {
    const getVenueInfo = async () => {
      const venueRes = await axios.get(venueUrl);
      setVenue(venueRes.data);

      const pointsDescRes = await axios.get(pointsUrl);

      const points = venueRes.data.points
        .split(",")
        .map((point, i) => (
          <Points key={i} pointsDesc={pointsDescRes.data} point={point} />
        ));
      setPoints(points);
    };

    getVenueInfo();
  }, [venueUrl, pointsUrl]);

  const {
    imageUrl,
    location,
    title,
    guests,
    details,
    amenities,
    pricePerNight,
    rating,
  } = venueInfo;

  return (
    <div className="row single-full-venue">
      <div
        className="single-full-venue__image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="container">
        <div className="container-fluid lower-fold">
          <div className="col s12 m7 l8 left-details">
            <div className="location">{location}</div>
            <div className="title">{title}</div>
            <div className="guests">{guests} guests</div>
            <div className="divider"></div>
            {points}
            <div className="divider"></div>
            <div className="detail">{details}</div>
            <br />
            <div className="amenities">
              <p>Amenities</p>
              <span>{amenities}</span>
            </div>
          </div>

          <div className="col s12 m5 l4  right-details">
            <div className="price-per-day">
              ${pricePerNight} <span>per day</span>
            </div>
            <div className="rating">
              <i className="material-icons">star</i>
              {rating}
            </div>
            <div className="col s12 m12 l6 check-in">
              Check-In
              <input type="date" />
            </div>
            <div className="col s12 m12 l6 check-out">
              Check-Out
              <input type="date" />
            </div>

            <div className="col s12">
              <select>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                {guests > 2 ? <option value="3">3 Guests</option> : null}
                {guests > 3 ? <option value="4">4 Guests</option> : null}
                {guests > 7 ? (
                  <>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7">7 Guests</option>
                    <option value="8">8 Guests</option>
                  </>
                ) : null}
                {guests > 8 ? <option value="9">9 Guests</option> : null}
              </select>
            </div>

            <div className="col s12 right">
              <button
                className="btn-large waves-effect waves-light  red accent-3"
                type="button"
                style={{ color: `#fff`, width: `180px`, fontWeight: `500` }}
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFullVenue;
