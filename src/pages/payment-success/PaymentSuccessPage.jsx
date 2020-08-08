import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import Spinner from "../../components/spinner/Spinner";

import { selectCurrentUserToken } from "../../redux/user/userSelector";

import "./PaymentSuccessPage.scss";

library.add(faLongArrowAltRight);

const PaymentSuccessPage = ({ match }) => {
  const [resvData, setResvData] = useState({
    reservationDetails: {},
    userData: {},
  });

  const { reservationDetails, userData } = resvData;
  const venueData = reservationDetails.venueData;

  const [waiting, setWaiting] = useState(true);

  const token = useSelector(selectCurrentUserToken);
  const stripeToken = match.params.stripeToken;
  const paymentData = { stripeToken, token };
  const successUrl = `${window.apiHost}/payment/success`;

  useEffect(() => {
    const getResvData = async () => {
      const res = await axios.post(successUrl, paymentData);
      await setResvData({
        ...resvData,
        reservationDetails: res.data.reservationDetails,
        userData: res.data.userData,
      });

      setWaiting(false);

      // sent ny firestore
      //   await axios
      //     .post(`https://fir-a-bnb.firebaseio.com/reservation.json`, res.data)
      //     .catch((e) => console.log(e.message));
    };
    getResvData();
    //   eslint-disable-next-line
  }, []);

  if (waiting) {
    return <Spinner />;
  }
  return (
    <div className="reservation-success row fade-in container">
      <h1 className="col s12 center">Start Packing!</h1>
      <div className="resv-details col s12">
        <div className="confirmed col s12 row main-header-text">
          <FontAwesomeIcon
            icon="long-arrow-alt-right"
            size="1x"
            color="rgb(255, 0, 98)"
          />
          Confirmed: {reservationDetails.diffDays} nights in{" "}
          {venueData.location}
          <div className="header-text">
            <div>Booked by: {userData.email}</div>
            <div>{moment().format("MMMM Do, YYYY")}</div>
          </div>
        </div>
        <div className="confirmed-detail row">
          <div className="col s12 l5 mb-s">
            <div className="bordered col">
              <div className="col s12" style={{ marginTop: `30px` }}>
                <div className="left">Check in</div>
                <div className="left col" style={{ fontWeight: `500` }}>
                  {moment(reservationDetails.checkIn).format("MMM Do, YYYY")}
                </div>
              </div>
              <div className="col s12 mb-ss">
                <div className="left">Check out</div>
                <div className="left col" style={{ fontWeight: `500` }}>
                  {moment(reservationDetails.checkOut).format("MMM Do, YYYY")}
                </div>
              </div>
              <div className="col s12 title-text mb-ss">{venueData.title}</div>
              <div className="col s12 details mb-s">{venueData.details}</div>
            </div>
          </div>

          <div className="col s12 l7">
            <div className="bordered col">
              <div className="col s12 upper charges">
                <div className="charges-text col s12">Charges</div>
                <div className="row col s12">
                  <div className="left">
                    ${reservationDetails.pricePerNight} x{" "}
                    {reservationDetails.diffDays} days
                  </div>
                  <div className="right">${reservationDetails.totalPrice}</div>
                </div>
                <div className="row col s12">
                  <div className="left">Discount</div>
                  <div className="right">$0</div>
                </div>
                <div className="row col s12 total">
                  <div className="left">TOTAL</div>
                  <div className="right">${reservationDetails.totalPrice}</div>
                </div>
              </div>
              <div className="col s12 row">
                To rview or make changes to your reservation in the future,
                visit your{" "}
                <Link to="/account" style={{ color: `rgb(255, 0, 98)` }}>
                  account page
                </Link>
                .
              </div>
              <div className="col s12 resv-image mb-s">
                {venueData.imageUrl ===
                "https://airbnb-clone-prexel-images.s3.amazonaws.com/waypoints/pondhouse.jpg" ? (
                  //   eslint-disable-next-line
                  <img
                    src="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  />
                ) : (
                  <img src={venueData.imageUrl} alt={venueData.imageUrl} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
