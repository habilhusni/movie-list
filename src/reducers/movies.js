import * as types from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case types.SEARCH_MOVIES_SUCCESS:
      return { isLoading: false, payload: action.payload, error: {} };
    case types.SEARCH_MOVIES_FAIL:
      return {
        isLoading: false,
        payload: {},
        error: action.error,
      };
    case types.ISLOADING_MOVIES:
      return { isLoading: action.isLoading, payload: {}, error: {} };
    default:
      return state;
  }
};
