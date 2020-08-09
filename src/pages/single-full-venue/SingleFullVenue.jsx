import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import moment from "moment";
import swal from "sweetalert";

import { selectCurrentUserToken } from "../../redux/user/userSelector";
import { modalToggle } from "../../redux/modal/modalActions";

import Points from "../../components/point/Point";
import SignUp from "../../components/sign-up/SignUp";
import Footer from "../../components/footer/Footer";

import loadScript from "../../utility/loadScript";
import { imageUrlChange } from "../../utility/imageUrlChange";

import "./SingleFullVenue.scss";

const SingleFullVenue = ({ match }) => {
  const currentUserToken = useSelector(selectCurrentUserToken);
  const dispatch = useDispatch();

  const [venueData, setVenue] = useState({});
  const [points, setPoints] = useState([]);
  const [reserveInfo, setReservInfo] = useState({
    checkIn: "",
    checkOut: "",
    numberOfGuests: 1,
  });

  let {
    imageUrl,
    location,
    title,
    guests,
    details,
    amenities,
    pricePerNight,
    rating,
  } = venueData;

  const { checkIn, checkOut, numberOfGuests } = reserveInfo;

  const venueUrl = `${window.apiHost}/venue/${match.params.venueId}`;
  const pointsUrl = `${window.apiHost}/points/get`;

  useEffect(() => {
    const getvenueData = async () => {
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

    getvenueData();
  }, [venueUrl, pointsUrl]);

  // that i get pic from api is broke, so I change pic manually
  imageUrl = imageUrlChange(match.params.venueId, imageUrl);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservInfo({
      ...reserveInfo,
      [name]: value,
    });
  };

  const handleReserve = async (e) => {
    e.preventDefault();
    const startDay = moment(checkIn);
    const endDay = moment(checkOut);
    const diffDays = endDay.diff(startDay, "days");
    console.log(startDay);
    if (diffDays < 1) {
      swal({
        title: "Check out date must be after check in day",
        icon: "error",
      });
    } else if (isNaN(diffDays)) {
      swal({
        title: "Please make sure your dates are valid",
        icon: "error",
      });
    } else {
      // diff days is a valid number!
      const totalPrice = pricePerNight * diffDays;
      const scriptUrl = "https://js.stripe.com/v3";
      const stripePublicKey =
        "pk_test_5198HtPL5CfCPYJ3X8TTrO06ChWxotTw6Sm2el4WkYdrfN5Rh7vEuVguXyPrTezvm3ntblRX8TpjAHeMQfHkEpTA600waD2fMrT";
      await loadScript(scriptUrl);
      const stripe = window.Stripe(stripePublicKey);
      const stripeSessionUrl = `${window.apiHost}/payment/create-session`;
      const data = {
        venueData,
        totalPrice,
        diffDays,
        pricePerNight,
        checkIn,
        checkOut,
        token: currentUserToken,
        numberOfGuests,
        currency: "USD",
      };

      const sessionVar = await axios.post(stripeSessionUrl, data);
      stripe
        .redirectToCheckout({
          sessionId: sessionVar.data.id,
        })
        .then((result) => {
          console.log(result);
        });
    }
  };

  return (
    <>
      <div className="row single-full-venue fade-in mb-l">
        <div
          className="single-full-venue__image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />

        <div className="container fade-in-delay">
          <div className="container-fluid lower-fold">
            <div className="col s12 m7 l8 left-details mb-m">
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
              <div className="col s12 xl6 check-in">
                Check-In
                <input
                  type="date"
                  name="checkIn"
                  value={checkIn}
                  onChange={handleChange}
                />
              </div>
              <div className="col s12 xl6 check-out">
                Check-Out
                <input
                  type="date"
                  name="checkOut"
                  value={checkOut}
                  onChange={handleChange}
                />
              </div>

              <div className="col s12">
                <select
                  name="numberOfGuests"
                  value={numberOfGuests}
                  onChange={handleChange}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  {guests > 2 ? <option value="3">3 Guests</option> : null}
                  {guests > 3 ? <option value="4">4 Guests</option> : null}
                  {guests > 4 ? <option value="5">5 Guests</option> : null}
                  {guests > 5 ? <option value="6">6 Guests</option> : null}
                  {guests > 6 ? <option value="7">7 Guests</option> : null}
                  {guests > 7 ? <option value="8">8 Guests</option> : null}
                  {guests > 8 ? <option value="9">9 Guests</option> : null}
                </select>
              </div>

              {currentUserToken ? (
                <div className="col s12 center">
                  <span
                    className="col s12  mb-ss red-text text-accent-3"
                    style={{ fontSize: `17px` }}
                  >
                    *Please use the following test credit card for payments*
                    <br />
                    4242 4242 4242 4242
                    <br />
                    -Exp: 05/55 - CVV: 555
                  </span>
                  <button
                    className="btn-large waves-effect waves-light  red accent-3"
                    type="button"
                    style={{ color: `#fff`, width: `180px`, fontWeight: `500` }}
                    onClick={handleReserve}
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
      <Footer />
    </>
  );
};

export default SingleFullVenue;
