import { combineReducers } from "redux";

import movies from "./movies";
import details from "./details";
import modal from "./modal";

export default combineReducers({
  movies,
  details,
  modal,
});
