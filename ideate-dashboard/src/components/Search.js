import React from "react";
import searchIcon from "../Assets/Search.svg";
import "../styles/Search.css";

class Search extends React.Component {
  render() {
    const searchIconObj = {
      backgroundImage: `url(${searchIcon})`,
    };
    return (
      <form action="#" className="search">
        <input
          type="text"
          name="search-reports"
          id="search-reports"
          className="search-reports"
          placeholder="Search Reports"
          style={searchIconObj}
        />
      </form>
    );
  }
}

export default Search;
