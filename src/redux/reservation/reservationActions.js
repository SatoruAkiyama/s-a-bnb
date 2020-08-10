import reservationActionTypes from "./reservationActionTypes";

export const reserv = (reservData) => ({
  type: reservationActionTypes.RESERVE,
  payload: reservData,
});
