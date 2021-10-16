import React from "react";
import "../styles/ReportsGenerated.css";

class ReportsGenerated extends React.Component {
  render() {
    return (
      <div className="reports-generated__wrapper">
        <div className="reports-generated">
          <h1>Reports generated</h1>
          <p>This is the number of reports you have used this month.</p>
          <div className="progress-indicator">
            <p>64%</p>
            <div className="progress-bar">
              <div className="progress-completed"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReportsGenerated;
