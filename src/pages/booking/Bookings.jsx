import React from "react";
import { Link, useLocation } from "react-router-dom";
import moment from "moment";

import { imageUrlChange } from "../../utility/imageUrlChange";

import pic from "../../assets/1.png";
import BookingCommentForm from "../../components/booking-comment-form/BookingCommentForm";

import "./Booking.scss";

const Bookings = ({ bookings, type }) => {
  const location = useLocation();

  const title =
    location.pathname === "/account/reservations/confirmed"
      ? "Confirmed Reservation"
      : "Past Reservation";
  const text =
    location.pathname === "/account/reservations/confirmed"
      ? "You haven't reserved any place yet."
      : "There are not Past Reservation.";

  return (
    <div className="bookings  fade-in ">
      <h1 className="main-header-text">{title}</h1>
      {bookings.length === 0 ? (
        <div
          style={{
            position: `relative`,
          }}
        >
          <img
            src={pic}
            alt=""
            style={{
              height: "auto",
              width: `100%`,
              maxWidth: "800px",
              margin: `0 auto`,
              display: `block`,
              opacity: `0.5`,
            }}
          />
          <h2
            className="main-header-text"
            style={{
              position: `absolute`,
              top: `40%`,
              left: `50%`,
              transform: `translateX(-50%)`,
              width: "100%",
              textAlign: `center`,
            }}
          >
            {text}
          </h2>
        </div>
      ) : null}
      {bookings.map((booking, i) => {
        const dates = `${moment(booking.checkIn).format("MMM Do")} - ${moment(
          booking.checkOut
        ).format("MMM Do YYYY")}`;
        // that i get pic from api is broke, so I change pic manually
        booking.venueData.imageUrl = imageUrlChange(
          booking.venueData.id,
          booking.venueData.imageUrl
        );
        return (
          <div
            className={`booking ${type === "upcoming" ? "upcoming" : ""}`}
            key={i}
          >
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src={booking.venueData.imageUrl} alt="" />
                </div>
                <div className="card-content">
                  <div>
                    <span style={{ fontWeight: `500` }}>
                      Dates and location :
                    </span>{" "}
                    <div className="booking-detail">{dates}</div>
                    <div className="booking-detail">
                      {booking.venueData.title}
                    </div>
                    <div className="booking-detail">
                      {booking.venueData.location}
                    </div>
                  </div>
                  <div>
                    <span style={{ fontWeight: `500` }}>Details :</span>{" "}
                    <div className="booking-detail">
                      {booking.numberOfGuests} Guests, {booking.totalNights}{" "}
                      Nights
                    </div>
                    <div className="booking-detail">
                      ${booking.pricePerNight} per night &nbsp; &nbsp; &nbsp; $
                      {booking.totalPrice} Total
                    </div>
                  </div>

                  {type === "past" && booking.status !== "cancelled" ? (
                    <div>
                      <span style={{ fontWeight: `500` }}>Actions :</span>{" "}
                      <div className="booking-detail pointer">
                        <h6>Comment</h6>
                        <BookingCommentForm booking={booking} />
                      </div>
                    </div>
                  ) : null}
                </div>

                <div
                  className="center"
                  style={{ margin: `5px 0`, paddingBottom: `10px` }}
                >
                  <Link to={`/venue/${booking.venueData.id}`}>
                    <button
                      className="btn-large waves-effect waves-light  red accent-3"
                      type="button"
                      style={{ color: `#fff`, fontSize: `14px` }}
                    >
                      about place
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Bookings;
