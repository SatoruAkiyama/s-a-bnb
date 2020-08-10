import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/userReducer";
import modalReducer from "./modal/modalReducer";
import mainDataReducer from "./main-data/mainDataReducer";
import reservationReducer from "./reservation/reservationReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "reservation"],
};

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  mainData: mainDataReducer,
  reservation: reservationReducer,
});

export default persistReducer(persistConfig, rootReducer);
