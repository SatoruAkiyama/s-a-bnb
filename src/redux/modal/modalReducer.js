import modalActionTypes from "./modalActionTypes";

const INTIAL_STATE = {
  open: false,
  content: null,
};

const modalReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case modalActionTypes.TOGGLE_MODAL:
      return {
        ...state,
        open: action.payload.open,
        content: action.payload.content,
      };
    default:
      return state;
  }
};

export default modalReducer;
