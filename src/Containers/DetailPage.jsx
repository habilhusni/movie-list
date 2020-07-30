import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Detail from "../Components/Detail";
import Loading from "../Components/Loading";

const DetailPage = (props) =>
  props.details.isLoading ? <Loading /> : <Detail details={props.details} />;

DetailPage.propTypes = {
  details: PropTypes.object,
};

DetailPage.defaultProps = {
  details: {},
};

const mapStateToProps = (state) => ({
  details: state.details,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
