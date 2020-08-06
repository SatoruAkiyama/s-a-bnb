import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Spinner from "./components/spinner/Spinner";

import "./App.scss";

const App = () => {
  const HomePage = lazy(() => import("./pages/home/HomePage"));
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
