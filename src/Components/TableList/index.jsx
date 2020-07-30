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
    render: (source) => (
      <img src={source} alt="poster" className="img-poster" />
    ),
  },
  {
    title: "",
    dataIndex: "action",
    key: "action",
    render: (text, record) => {
      return (
        <Link
          to={{
            pathname: "/detail",
          }}
        >
          <Button onClick={() => prps.getDetails(record.imdbID)}>View</Button>
        </Link>
      );
    },
  },
];

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
