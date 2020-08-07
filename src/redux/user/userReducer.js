import userActionTypes from "./userActionTypes";

const INTIAL_STATE = {
  currentUser: {},
};

const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_UP_AND_SIGN_IN:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userActionTypes.LOG_OUT:
      return {
        ...state,
        currentUser: {},
      };
    default:
      return state;
  }
};

export default userReducer;
