import React, { Component } from "react";
import "../styles/Chart.css";
import filterIcon from "../Assets/Filter Icon.svg";
import upArrowIcon from "../Assets/Up Arrow.svg";
import downArrowIcon from "../Assets/Down Arrow.svg";

export class Chart extends Component {
  render() {
    return (
      <div className="graph">
        <header className="graph__header">
          <h1 className="graph__title">Reports Generated</h1>
          <div className="filter">
            <img src={filterIcon} alt="" />
            <a href=""> Filter </a>
          </div>
        </header>
        <header className="graph__statSummary">
          <div className="graph__stat">
            <h2>This Month</h2>
            <div className="graph__statNumbers green">
              <p>121 Reports</p>
              <img src={upArrowIcon} alt="" />
              <small>5%</small>
            </div>
          </div>
          <div className="graph__stat">
            <h2>Last Month</h2>
            <div className="graph__statNumbers red">
              <p>109 Reports</p>
              <img src={downArrowIcon} alt="" />
              <small>5%</small>
            </div>
          </div>
          <div className="graph__stat">
            <h2>% Increase</h2>
            <div className="graph__statNumbers green">
              <p>50%</p>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Chart;
