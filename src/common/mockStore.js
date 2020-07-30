import configureStore from "redux-mock-store";

const state = {
  movies: {
    isLoading: false,
    payload: {},
    error: {},
  },
  details: {
    isLoading: false,
    payload: {},
    error: {},
  },
  modal: {
    isShow: false,
    source: "",
  },
};

export default configureStore()(state);
