import reservationActionTypes from "./reservationActionTypes";

const INITIAL_STATE = null;

const reservationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case reservationActionTypes.RESERVE:
      return action.payload;
    default:
      return state;
  }
};

export default reservationReducer;
