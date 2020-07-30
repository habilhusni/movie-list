import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SearchBar from "../Components/SearchBar";
import TableList from "../Components/TableList";
import actions from "../actions";

const HomePage = (props) => (
  <div>
    <SearchBar searchMovies={props.getMovies} />
    <TableList movies={props.movies} getDetails={props.getDetails} />
  </div>
);

HomePage.propTypes = {
  getMovies: PropTypes.func.isRequired,
  getDetails: PropTypes.func.isRequired,
  movies: PropTypes.object,
};

HomePage.defaultProps = {
  movies: {},
};

const mapStateToProps = (state) => ({
  movies: state.movies,
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: (keyword) => dispatch(actions.getMovies(keyword)),
  getDetails: (imdbID) => dispatch(actions.getDetails(imdbID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
