import userActionTypes from "./userActionTypes";

export const signUpAndSignIn = (uerInfo) => ({
  type: userActionTypes.SIGN_UP_AND_SIGN_IN,
  payload: uerInfo,
});

export const logout = () => ({
  type: userActionTypes.LOG_OUT,
});
