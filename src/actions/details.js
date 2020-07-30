import axios from "axios";
import * as types from "../constants";

const HTTP = "https://www.omdbapi.com/?apikey=faf7e5bb&i=";

const getDetailsSuccess = (payload) => ({
  type: types.GET_DETAILS_SUCCESS,
  payload,
});

const getDetailsFail = (error) => ({
  type: types.GET_DETAILS_FAIL,
  error,
});

const isLoadingDetail = (isLoading) => ({
  type: types.ISLOADING_DETAIL,
  isLoading,
});

export const getDetails = (imdbID) => (dispatch) => {
  dispatch(isLoadingDetail(true));

  return axios
    .get(`${HTTP}${imdbID}`, {
      method: "get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(function (response) {
      if (response.status === 200 && response.data.Response === "True") {
        dispatch(getDetailsSuccess(response));
      } else {
        dispatch(getDetailsFail(response.data.Error));
      }
    })
    .catch(function (error) {
      dispatch(getDetailsFail(error));
    });
};
