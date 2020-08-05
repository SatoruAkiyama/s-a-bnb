import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

const middleware = [reduxPromise];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
