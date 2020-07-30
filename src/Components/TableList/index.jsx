import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "antd";
import "./index.css";

const columns = (prps) => [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
  },
  {
    title: "imdbID",
    dataIndex: "imdbID",
    key: "imdbID",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "action",
  },
  {
    title: "Poster",
    dataIndex: "poster",
    key: "poster",
    render: (source) => renderPoster(prps, source),
  },
  {
    title: "",
    dataIndex: "action",
    key: "action",
    render: (text, record) => renderView(prps, record),
  },
];

const renderPoster = (prps, src) => (
  <img
    onClick={() => prps.willModalShow(true, src)}
    src={src}
    alt="poster"
    className="img-poster"
  />
);

const renderView = (prps, rec) => (
  <Link
    to={{
      pathname: "/detail",
    }}
  >
    <Button onClick={() => prps.getDetails(rec.imdbID)}>View</Button>
  </Link>
);

const isMoviesAvailable = (mvs) => {
  if (!mvs) {
    return false;
  } else if (!mvs.payload) {
    return false;
  } else if (!mvs.payload.data) {
    return false;
  } else if (!mvs.payload.data.Search) {
    return false;
  } else if (!mvs.payload.data.Search.length === 0) {
    return false;
  }

  return true;
};

const data = (prps) =>
  isMoviesAvailable(prps.movies)
    ? prps.movies.payload.data.Search.map((item, i) => ({
        key: i,
        title: item.Title,
        year: item.Year,
        imdbID: item.imdbID,
        type: item.Type,
        poster: item.Poster,
      }))
    : [];

const TableList = (props) => (
  <Table
    columns={columns(props)}
    dataSource={data(props)}
    loading={props.movies.isLoading}
    pagination={false}
  />
);

export default TableList;
