import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Spinner from "./components/spinner/Spinner";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Modal from "./components/modal/Modal";

import "./App.scss";

const App = () => {
  const HomePage = lazy(() => import("./pages/home/HomePage"));
  const SingleFullVenue = lazy(() =>
    import("./pages/single-full-venue/SingleFullVenue")
  );
  const CityVenues = lazy(() => import("./pages/city-venues/CityVenues"));
  return (
    <BrowserRouter>
      <ScrollTop>
        <Header />
        <Modal />
        <div className="app">
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/venue/:venueId" component={SingleFullVenue} />
              <Route exact path="/city/:cityId" component={CityVenues} />
            </Switch>
          </Suspense>
        </div>
      </ScrollTop>
    </BrowserRouter>
  );
};

export default App;
