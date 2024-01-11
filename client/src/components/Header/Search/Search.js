import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search-container">
      <InputBase
        className="input-search"
        placeholder="Search for Products, Brands and More"
      />
      <SearchIcon className="search-icon" />
    </div>
  );
};

export default Search;
