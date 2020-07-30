import * as types from "../constants";

export const willModalShow = (isShow, source) => ({
  type: types.ISMODAL_SHOW,
  isShow,
  source,
});
