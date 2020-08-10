import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import Spinner from "../../components/spinner/Spinner";
import Footer from "../../components/footer/Footer";

import {
  selectCurrentUserToken,
  selectCurrentUserEmail,
} from "../../redux/user/userSelector";

import { imageUrlChange } from "../../utility/imageUrlChange";

import "./PaymentSuccessPage.scss";

library.add(faLongArrowAltRight);

const PaymentSuccessPage = () => {
  const [resvData, setResvData] = useState({
    reservationDetails: {},
  });

  const { reservationDetails } = resvData;
  const venueData = reservationDetails.venueData;

  const [waiting, setWaiting] = useState(true);

  const token = useSelector(selectCurrentUserToken);
  const userEmail = useSelector(selectCurrentUserEmail);

  useEffect(() => {
    const getResvData = async () => {
      const res = await axios
        .get(
          `https://fir-a-bnb.firebaseio.com/reservation/${token.slice(
            0,
            30
          )}.json`
        )
        .catch((e) => console.log(e.message));

      const resArry = Object.keys(res.data).map((fi) => res.data[fi]);

      const displayData = resArry.slice(-1)[0];

      await setResvData({
        ...resvData,
        reservationDetails: displayData,
      });

      setWaiting(false);
    };
    getResvData();
    //   eslint-disable-next-line
  }, []);
  if (!!venueData) {
    venueData.imageUrl = imageUrlChange(venueData.id, venueData.imageUrl);
  }

  if (waiting) {
    return <Spinner />;
  }
  return (
    <>
      <div className="reservation-success row fade-in container mb-l">
        <h1 className="col s12 center mb-s">Start Packing!</h1>
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
              <div>Booked by: {userEmail}</div>
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
                <div className="col s12 title-text mb-ss">
                  {venueData.title}
                </div>
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
                    <div className="right">
                      ${reservationDetails.totalPrice}
                    </div>
                  </div>
                  <div className="row col s12">
                    <div className="left">Discount</div>
                    <div className="right">$0</div>
                  </div>
                  <div className="row col s12 total">
                    <div className="left">TOTAL</div>
                    <div className="right">
                      ${reservationDetails.totalPrice}
                    </div>
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
                  <img src={venueData.imageUrl} alt={venueData.imageUrl} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentSuccessPage;
