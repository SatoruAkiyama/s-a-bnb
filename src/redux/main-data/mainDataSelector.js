import { createSelector } from "reselect";

const selectMainData = (state) => state.mainData;

const selectMaindataContent = createSelector(
  [selectMainData],
  (mainData) => mainData.mainDataContent
);

export const selectActivities = createSelector(
  [selectMaindataContent],
  (mainDataContent) =>
    mainDataContent !== null ? mainDataContent.activities : null
);

export const selectActivityMore = createSelector(
  [selectMaindataContent],
  (mainDataContent) =>
    mainDataContent !== null ? mainDataContent.activityMore : null
);

export const selectAsia = createSelector(
  [selectMaindataContent],
  (mainDataContent) => (mainDataContent !== null ? mainDataContent.asia : null)
);

export const selectCities = createSelector(
  [selectMaindataContent],
  (mainDataContent) =>
    mainDataContent !== null ? mainDataContent.cities : null
);

export const selectEurope = createSelector(
  [selectMaindataContent],
  (mainDataContent) =>
    mainDataContent !== null ? mainDataContent.europe : null
);

export const selectExotic = createSelector(
  [selectMaindataContent],
  (mainDataContent) =>
    mainDataContent !== null ? mainDataContent.exotic : null
);

export const selectRecVenues = createSelector(
  [selectMaindataContent],
  (mainDataContent) =>
    mainDataContent !== null ? mainDataContent.recVenues : null
);
