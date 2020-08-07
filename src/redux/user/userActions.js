import userActionTypes from "./userActionTypes";

export const register = (uerInfo) => ({
  type: userActionTypes.REGISTER,
  payload: uerInfo,
});
