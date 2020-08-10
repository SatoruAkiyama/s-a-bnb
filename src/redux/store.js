import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";
import persistReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

const middleware = [reduxPromise, sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(
  persistReducer,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
