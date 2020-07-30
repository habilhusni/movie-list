import React from "react";
import { Descriptions } from "antd";
import "./index.css";

const isDetailsAvailable = (dtls) => {
  if (!dtls) {
    return false;
  } else if (!dtls.payload) {
    return false;
  } else if (!dtls.payload.data) {
    return false;
  }

  return true;
};

const Detail = (props) =>
  isDetailsAvailable(props.details) ? (
    <Descriptions title={props.details.payload.data.Title} bordered>
      <Descriptions.Item label="Actors">
        {props.details.payload.data.Actors}
      </Descriptions.Item>
      <Descriptions.Item label="Awards">
        {props.details.payload.data.Awards}
      </Descriptions.Item>
      <Descriptions.Item label="Box Office">
        {props.details.payload.data.BoxOffice}
      </Descriptions.Item>
      <Descriptions.Item label="Country">
        {props.details.payload.data.Country}
      </Descriptions.Item>
      <Descriptions.Item label="DVD">
        {props.details.payload.data.DVD}
      </Descriptions.Item>
      <Descriptions.Item label="Director">
        {props.details.payload.data.Director}
      </Descriptions.Item>
      <Descriptions.Item label="Genre">
        {props.details.payload.data.Genre}
      </Descriptions.Item>
      <Descriptions.Item label="Language">
        {props.details.payload.data.Language}
      </Descriptions.Item>
      <Descriptions.Item label="Metascore">
        {props.details.payload.data.Metascore}
      </Descriptions.Item>
      <Descriptions.Item label="Plot">
        {props.details.payload.data.Plot}
      </Descriptions.Item>
      <Descriptions.Item label="Poster">
        <img
          src={props.details.payload.data.Poster}
          alt="poster"
          className="img-poster"
        />
      </Descriptions.Item>
      <Descriptions.Item label="Production">
        {props.details.payload.data.Production}
      </Descriptions.Item>
      <Descriptions.Item label="Rated">
        {props.details.payload.data.Rated}
      </Descriptions.Item>
      <Descriptions.Item label="Released">
        {props.details.payload.data.Released}
      </Descriptions.Item>
      <Descriptions.Item label="Response">
        {props.details.payload.data.Response}
      </Descriptions.Item>
      <Descriptions.Item label="Runtime">
        {props.details.payload.data.Runtime}
      </Descriptions.Item>
      <Descriptions.Item label="Type">
        {props.details.payload.data.Type}
      </Descriptions.Item>
      <Descriptions.Item label="Website">
        {props.details.payload.data.Website}
      </Descriptions.Item>
      <Descriptions.Item label="Writer">
        {props.details.payload.data.Writer}
      </Descriptions.Item>
      <Descriptions.Item label="Year">
        {props.details.payload.data.Year}
      </Descriptions.Item>
      <Descriptions.Item label="imdbID">
        {props.details.payload.data.imdbID}
      </Descriptions.Item>
      <Descriptions.Item label="imdbRating">
        {props.details.payload.data.imdbRating}
      </Descriptions.Item>
      <Descriptions.Item label="imdbVotes">
        {props.details.payload.data.imdbVotes}
      </Descriptions.Item>
    </Descriptions>
  ) : (
    <h2>No details</h2>
  );

export default Detail;
