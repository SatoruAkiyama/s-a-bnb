import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import persistReducer from "./rootReducer";

const middleware = [reduxPromise];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(
  persistReducer,
  applyMiddleware(...middleware)
);
export const persistor = persistStore(store);
