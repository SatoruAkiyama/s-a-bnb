import React from "react";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import swal from "sweetalert";

import { selectReservationData } from "../../redux/reservation/reservationSelector";

import logo from "../../assets/logo.png";

import PageHeader from "../../components/page-header/PageHeader";
import Footer from "../../components/footer/Footer";

import { imageUrlChange } from "../../utility/imageUrlChange";

const CheckoutPage = ({ history }) => {
  const resvData = useSelector(selectReservationData);

  let {
    totalPrice,
    token,
    venueData,
    checkIn,
    checkOut,
    numberOfGuests,
  } = resvData;

  const priceForStripe = totalPrice * 100;

  const onToken = async () => {
    await axios
      .post(
        `https://fir-a-bnb.firebaseio.com/reservation/${token.slice(
          0,
          30
        )}.json`,
        resvData
      )
      .then(() => {
        swal({
          title: "Thank you for reservation",
          icon: "success",
        }).then(() => {
          history.push(`/payment-success/${token}`);
        });
      })

      .catch((e) => {
        swal({
          title: e.message,
          icon: "error",
        });
      });
  };

  const imageUrl = imageUrlChange(venueData.id, venueData.imageUrl);

  if (resvData === null) history.push("/");

  return (
    <div className="fade-in">
      <div className="about-us  mb-l">
        <div className="page-header-container">
          <PageHeader title="Check out" imageUrl={imageUrl} />
        </div>
        <div className="container">
          <h1 className="main-header-text">{venueData.title}</h1>
          <div
            className="card"
            style={{
              padding: `20px`,
            }}
          >
            <div
              className="card-content blue-grey-text text-darken-4"
              style={{
                maxWidth: `800px`,
                margin: `20px auto`,
              }}
            >
              <span
                className="card-title"
                style={{
                  maxWidth: `800px`,
                  margin: `20px auto`,
                }}
              >
                Check In
              </span>
              <p>{checkIn}.</p>
            </div>
            <div
              className="card-content  blue-grey-text text-darken-4"
              style={{
                maxWidth: `800px`,
                margin: `20px auto`,
              }}
            >
              <span className="card-title">Check Out</span>
              <p>{checkOut}</p>
            </div>
            <div
              className="card-content  blue-grey-text text-darken-4"
              style={{
                maxWidth: `800px`,
                margin: `20px auto`,
              }}
            >
              <span className="card-title">Number of guests</span>
              <p>{numberOfGuests}</p>
            </div>
            <div
              className="card-content  red-text text-accent-3"
              style={{
                maxWidth: `800px`,
                margin: `20px auto`,
              }}
            >
              <span className="card-title">
                *Please use the following test credit card for payments*
              </span>
              <p> 4242 4242 4242 4242</p>
              <p> -Exp: 05/55 - CVV: 555</p>
            </div>
            <div
              className="card-content  red-text text-accent-3"
              style={{
                maxWidth: `800px`,
                margin: `20px auto`,
              }}
            >
              <StripeCheckout
                label="Pay Now"
                name="S-A-bnb"
                billingAddress
                shippingAddress
                image={logo}
                description={`Your total is $${totalPrice}`}
                amount={priceForStripe}
                panelLabel="Pay Now"
                token={onToken}
                stripeKey="pk_test_51H3H2jFkI3rfmiPu83VIoBl8bl3rZJnpJVkBpy167pxJLsbZKOkvkoUF3PZVywQbVJgfDw6MrGkGPz8QDUNdgujw000vcqXoiH"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
