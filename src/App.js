import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUserToken } from "./redux/user/userSelector";
import { fetchCollectionsStart } from "./redux/main-data/mainDataActions";

import Header from "./components/header/Header";
import Spinner from "./components/spinner/Spinner";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Modal from "./components/modal/Modal";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  const HomePage = lazy(() => import("./pages/home/HomePage"));
  const SingleFullVenuePage = lazy(() =>
    import("./pages/single-full-venue/SingleFullVenue")
  );
  const CityVenuesPage = lazy(() => import("./pages/city-venues/CityVenues"));
  const PaymentSuccessPage = lazy(() =>
    import("./pages/payment-success/PaymentSuccessPage")
  );
  const AccountPage = lazy(() => import("./pages/account/AccountPage"));
  const SearchPage = lazy(() => import("./pages/search/SearchPage"));
  const ActivityPage = lazy(() => import("./pages/activity/ActivityPage"));
  const AboutUsPage = lazy(() => import("./pages/about-us/AboutUsPage"));
  const RecruitPage = lazy(() => import("./pages/recruit/RecruitPage"));
  const RecruitContactPage = lazy(() =>
    import("./pages/recruit-contact/RecruitContactPage")
  );
  const ErrorPage = lazy(() => import("./pages/error/ErrorPage"));

  const user = useSelector(selectCurrentUserToken);

  return (
    <BrowserRouter>
      <ScrollTop>
        <Header />
        <ErrorBoundary>
          <Modal />
          <div className="app">
            <Suspense fallback={<Spinner />}>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about-us" component={AboutUsPage} />
                <Route exact path="/recruit" component={RecruitPage} />
                <Route
                  exact
                  path="/recruit/:recruitId"
                  component={RecruitContactPage}
                />
                <Route
                  exact
                  path="/venue/:venueId"
                  component={SingleFullVenuePage}
                />
                <Route exact path="/city/:cityId" component={CityVenuesPage} />
                <Route
                  exact
                  path="/activity/:activityId"
                  component={ActivityPage}
                />
                <Route
                  exact
                  path="/payment-success/:stripeToken"
                  component={PaymentSuccessPage}
                />
                <Route
                  exact
                  path="/search/:searchTerm"
                  component={SearchPage}
                />
                <Route
                  path="/account"
                  render={() => (user ? <AccountPage /> : <Redirect to="/" />)}
                />
                <Route render={() => <ErrorPage />} />
              </Switch>
            </Suspense>
          </div>
        </ErrorBoundary>
      </ScrollTop>
    </BrowserRouter>
  );
};

export default App;
