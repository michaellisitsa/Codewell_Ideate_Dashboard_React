import React from "react";
import "../styles/Sidebar.css";
import SidebarLink from "./SidebarLink";
import overviewIcon from "../Assets/Overview.svg";
import reportIcon from "../Assets/Report.svg";
import settingsIcon from "../Assets/Settings.svg";
import helpIcon from "../Assets/Help.svg";
import ReportsGenerated from "./ReportsGenerated";

class Sidebar extends React.Component {
  render() {
    return (
      <aside className="menu" id="menu">
        <nav className="menu__items">
          <SidebarLink icon={overviewIcon} name="Overview" />
          <SidebarLink icon={reportIcon} name="Report" />
          <SidebarLink icon={settingsIcon} name="Settings" />
          <div className="menu__link-container help-divider"></div>
          <SidebarLink icon={helpIcon} name="Help" />
        </nav>
        <div id="bot-sidebar-marker" className="bot-sidebar-marker"></div>
        <ReportsGenerated />
      </aside>
    );
  }
}

export default Sidebar;
