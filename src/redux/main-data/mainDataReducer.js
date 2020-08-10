import mainDataActionTypes from "./mainDataActionTypes";

const INITIAL_STATE = {
  mainDataContent: null,
  errorMesssage: "",
};

const mainDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case mainDataActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
      };
    case mainDataActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        mainDataContent: action.payload,
        errorMesssage: "",
      };
    case mainDataActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMesssage: action.payload,
      };
    default:
      return state;
  }
};

export default mainDataReducer;
