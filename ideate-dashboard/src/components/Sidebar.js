import React from "react";
import "../styles/Sidebar.css";
import SidebarLink from "./SidebarLink";
import overviewIcon from "../Assets/Overview.svg";
import reportIcon from "../Assets/Report.svg";
import settingsIcon from "../Assets/Settings.svg";
import helpIcon from "../Assets/Help.svg";
import ReportsGenerated from "./ReportsGenerated";

class Sidebar extends React.Component {
  state = { counter: 0 };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.time = new Date();
    this.timerID = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    var timeout = 100;
    if (this.state.counter == timeout) {
      this.setState({
        counter: 0,
      });
    } else {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
  }

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
        <ReportsGenerated percentage={this.state.counter} />
      </aside>
    );
  }
}

export default Sidebar;
