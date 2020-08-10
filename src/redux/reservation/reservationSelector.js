import { createSelector } from "reselect";

const selectReservation = (state) => state.reservation;

export const selectReservationData = createSelector(
  [selectReservation],
  (reservation) => (reservation ? reservation : null)
);
