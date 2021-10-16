import React from "react";
import "../styles/Sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="menu" id="menu">
        <nav className="menu__items">
          <div className="menu__link-container">
            <img src="Assets/Overview.svg" alt="" className="menu__link-icon" />
            <a className="menu__links" href="#">
              Overview
            </a>
          </div>
          <div className="menu__link-container">
            <img src="Assets/Report.svg" alt="" className="menu__link-icon" />
            <a className="menu__links" href="#">
              Reports
            </a>
          </div>
          <div className="menu__link-container">
            <img src="Assets/Settings.svg" alt="" className="menu__link-icon" />
            <a className="menu__links" href="#">
              Settings
            </a>
          </div>
          <div className="menu__link-container help-divider"></div>
          <div className="menu__link-container">
            <img src="Assets/Help.svg" alt="" className="menu__link-icon" />
            <a className="menu__links" href="#">
              Help
            </a>
          </div>
        </nav>
        <div id="bot-sidebar-marker" className="bot-sidebar-marker"></div>
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
      </aside>
    );
  }
}

export default Sidebar;
