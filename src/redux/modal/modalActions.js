import modalActionTypes from "./modalActionTypes";

export const modalToggle = (open, content) => ({
  type: modalActionTypes.TOGGLE_MODAL,
  payload: {
    open,
    content,
  },
});
