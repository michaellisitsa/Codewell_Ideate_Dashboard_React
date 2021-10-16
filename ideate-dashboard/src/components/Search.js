import React from "react";
import searchIcon from "../Assets/Search.svg";
import "../styles/Search.css";

class Search extends React.Component {
  render() {
    const icon = this.props.icon;
    return (
      <form action="#" className="search">
        <input
          type="text"
          name="search-reports"
          id="search-reports"
          className="search-reports"
          placeholder="Search Reports"
          style={{ backgroundImage: `url(${searchIcon})` }}
        />
      </form>
    );
  }
}

export default Search;
