import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUserToken } from "./redux/user/userSelector";

import Header from "./components/header/Header";
import Spinner from "./components/spinner/Spinner";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Modal from "./components/modal/Modal";

import "./App.scss";

const App = () => {
  const HomePage = lazy(() => import("./pages/home/HomePage"));
  const SingleFullVenuePage = lazy(() =>
    import("./pages/single-full-venue/SingleFullVenue")
  );
  const CityVenuesPage = lazy(() => import("./pages/city-venues/CityVenues"));
  const PaymentSuccessPage = lazy(() =>
    import("./pages/payment-success/PaymentSuccessPage")
  );
  const AccountPage = lazy(() => import("./pages/account/AccountPage"));

  const user = useSelector(selectCurrentUserToken);

  return (
    <BrowserRouter>
      <ScrollTop>
        <Header />
        <Modal />
        <div className="app">
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route
                exact
                path="/venue/:venueId"
                component={SingleFullVenuePage}
              />
              <Route exact path="/city/:cityId" component={CityVenuesPage} />
              <Route
                exact
                path="/payment-success/:stripeToken"
                component={PaymentSuccessPage}
              />
              <Route
                path="/account"
                render={() => (user ? <AccountPage /> : <Redirect to="/" />)}
              />
            </Switch>
          </Suspense>
        </div>
      </ScrollTop>
    </BrowserRouter>
  );
};

export default App;
