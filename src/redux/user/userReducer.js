import userActionTypes from "./userActionTypes";

const INTIAL_STATE = {
  currentUser: {},
};

const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.REGISTER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
