import React from "react";
import { Input } from "antd";
import "./index.css";

const { Search } = Input;

const handleSearchBar = (prps, keyword) => {
  if (prps) {
    prps.searchMovies(keyword);
  }
};

const SearchBar = (props) => (
  <Search
    placeholder="Search movies by title"
    enterButton="Search"
    size="large"
    onSearch={(value) => handleSearchBar(props, value)}
  />
);

export default SearchBar;
