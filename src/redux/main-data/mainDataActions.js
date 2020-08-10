import mainDataActionTypes from "./mainDataActionTypes";

export const fetchCollectionsStart = () => {
  return {
    type: mainDataActionTypes.FETCH_COLLECTIONS_START,
  };
};

export const fetchCollectionsSuccess = (mainData) => {
  return {
    type: mainDataActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: mainData,
  };
};

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: mainDataActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  };
};
