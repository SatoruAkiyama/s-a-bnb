import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { selectCurrentUserEmail } from "../../redux/user/userSelector";
import { modalToggle } from "../../redux/modal/modalActions";

import Points from "../../components/point/Point";
import SignUp from "../../components/sign-up/SignUp";

import "./SingleFullVenue.scss";

const SingleFullVenue = ({ match }) => {
  const isCurrentUser = useSelector(selectCurrentUserEmail);
  const dispatch = useDispatch();

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

  let {
    imageUrl,
    location,
    title,
    guests,
    details,
    amenities,
    pricePerNight,
    rating,
  } = venueInfo;
  // eslint-disable-next-line
  if (match.params.venueId == 3) {
    imageUrl =
      "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  }

  return (
    <div className="row single-full-venue fade-in">
      <div
        className="single-full-venue__image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="container fade-in-delay">
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

            {isCurrentUser ? (
              <div className="col s12 center">
                <button
                  className="btn-large waves-effect waves-light  red accent-3"
                  type="button"
                  style={{ color: `#fff`, width: `180px`, fontWeight: `500` }}
                >
                  Reserve
                </button>
              </div>
            ) : (
              <div className="col s12 center">
                <span className="col s12  mb-ss" style={{ fontSize: `17px` }}>
                  You must sign up to reserve.
                </span>
                <button
                  className="btn-large waves-effect waves-light  red accent-3"
                  type="button"
                  style={{ color: `#fff`, width: `180px`, fontWeight: `500` }}
                  onClick={() => dispatch(modalToggle(true, <SignUp />))}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFullVenue;
