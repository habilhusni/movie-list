import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal } from "antd";
import SearchBar from "../Components/SearchBar";
import TableList from "../Components/TableList";
import actions from "../actions";
import "./HomePage.css";

const HomePage = (props) => (
  <div>
    <SearchBar searchMovies={props.getMovies} />
    <TableList
      movies={props.movies}
      getDetails={props.getDetails}
      willModalShow={props.willModalShow}
    />
    <Modal
      title="Photo Detail"
      visible={props.modal.isShow}
      onOk={() => props.willModalShow(false)}
      onCancel={() => props.willModalShow(false)}
    >
      <img src={props.modal.source} alt="poster" />
    </Modal>
  </div>
);

HomePage.propTypes = {
  getMovies: PropTypes.func.isRequired,
  getDetails: PropTypes.func.isRequired,
  willModalShow: PropTypes.func.isRequired,
  movies: PropTypes.object,
  modal: PropTypes.object,
};

HomePage.defaultProps = {
  movies: {},
  modal: {
    isShow: false,
    source: "",
  },
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  modal: state.modal,
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: (keyword) => dispatch(actions.getMovies(keyword)),
  getDetails: (imdbID) => dispatch(actions.getDetails(imdbID)),
  willModalShow: (isShow, source) =>
    dispatch(actions.willModalShow(isShow, source)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
