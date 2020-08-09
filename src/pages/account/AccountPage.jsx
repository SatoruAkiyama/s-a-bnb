import React, { useState, useEffect, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import moment from "moment";

import { selectCurrentUserToken } from "../../redux/user/userSelector";

import AccountSlideBar from "../../components/account-bar/AccountBar";
import Footer from "../../components/footer/Footer";

import "./AccountPage.scss";

const AccountPage = () => {
  const token = useSelector(selectCurrentUserToken);
  const data = {
    token,
  };

  const [bookingInfo, setBookingInfo] = useState({
    pastBookinkgs: [],
    upcomingBookings: [],
  });

  const { pastBookinkgs, upcomingBookings } = bookingInfo;

  const accountUrl = `${window.apiHost}/users/getBookings`;

  useEffect(() => {
    const getAccountData = async () => {
      const res = await axios.post(accountUrl, data);
      //   console.log(res.data);

      let pastBookinkgs = [];
      let upcomingBookings = [];

      res.data.forEach((booking) => {
        const today = moment(); //get todays day, so we know what is past booking.
        const checkOutDate = moment(booking.checkOut);
        const diffDays = checkOutDate.diff(today, "days");
        if (diffDays < 0) {
          pastBookinkgs.push(booking);
        } else {
          upcomingBookings.push(booking);
        }
      });
      setBookingInfo({
        ...bookingInfo,
        pastBookinkgs,
        upcomingBookings,
      });
    };

    getAccountData();
    // eslint-disable-next-line
  }, []);

  const AccountOverview = lazy(() =>
    import("../account-over-view/AccountOverview")
  );
  const Booking = lazy(() => import("../booking/Bookings"));
  const ChangePassword = lazy(() =>
    import("../change-password/ChangePassword")
  );

  return (
    <div className="fade-in">
      <div className="account container mb-l">
        <AccountSlideBar />
        <div className="row  account-container">
          <div className="col s12">
            <Suspense fallback={""}>
              <Switch>
                <Route exact path="/account" component={AccountOverview} />
                <Route
                  exact
                  path="/account/reservations/confirmed"
                  render={() => (
                    <Booking
                      type="upcoming"
                      bookings={upcomingBookings}
                      token={token}
                    />
                  )}
                />
                <Route
                  exact
                  path="/account/reservations/past"
                  render={() => (
                    <Booking type="past" bookings={pastBookinkgs} />
                  )}
                />
                <Route
                  exact
                  path="/account/change-password"
                  render={() => <ChangePassword token={token} />}
                />
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountPage;
