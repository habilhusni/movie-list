import * as types from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case types.GET_DETAILS_SUCCESS:
      return { isLoading: false, payload: action.payload, error: {} };
    case types.GET_DETAILS_FAIL:
      return {
        isLoading: false,
        payload: {},
        error: action.error,
      };
    case types.ISLOADING_DETAIL:
      return { isLoading: action.isLoading, payload: {}, error: {} };
    default:
      return state;
  }
};
