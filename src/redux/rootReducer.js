import { combineReducers } from "redux";

import userReducer from "./user/userReducer";
import modalReducer from "./modal/modalReducer";

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
});

export default rootReducer;
