import userActionTypes from "./userActionTypes";

export const signUp = (uerInfo) => ({
  type: userActionTypes.SIGN_UP,
  payload: uerInfo,
});

export const logout = () => ({
  type: userActionTypes.LOG_OUT,
});
