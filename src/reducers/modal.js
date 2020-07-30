import * as types from "../constants";

export default (state = {}, action) => {
  switch (action.type) {
    case types.ISMODAL_SHOW:
      return { isShow: action.isShow, source: action.source };
    default:
      return state;
  }
};
