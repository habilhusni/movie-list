import axios from "axios";
import * as types from "../constants";

const HTTP = "https://www.omdbapi.com/?apikey=faf7e5bb&s=";

const getMoviesSuccess = (payload) => ({
  type: types.SEARCH_MOVIES_SUCCESS,
  payload,
});

const getMoviesFail = (error) => ({
  type: types.SEARCH_MOVIES_FAIL,
  error,
});

const isLoadingMovies = (isLoading) => ({
  type: types.ISLOADING_MOVIES,
  isLoading,
});

export const getMovies = (searchKey) => (dispatch) => {
  dispatch(isLoadingMovies(true));

  return axios
    .get(`${HTTP}${searchKey}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      if (response.status === 200 && response.data.Response === "True") {
        dispatch(getMoviesSuccess(response));
      } else {
        dispatch(getMoviesFail(response.data.Error));
      }
    })
    .catch(function (error) {
      dispatch(getMoviesFail(error));
    });
};
