import React from "react";
import "../styles/Sidebar.css";
import SidebarLink from "./SidebarLink";
import overviewIcon from "../Assets/Overview.svg";
import reportIcon from "../Assets/Report.svg";
import settingsIcon from "../Assets/Settings.svg";
import helpIcon from "../Assets/Help.svg";
import ReportsGenerated from "./ReportsGenerated";

class Sidebar extends React.Component {
  state = { counter: 0, selected: "Overview" };
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

  tick = () => {
    let timeout = 100;
    if (this.state.counter == timeout) {
      this.setState({
        counter: 0,
      });
    } else {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
  };

  selectedClickHandler = (e) => {
    e.preventDefault();
    this.setState({
      selected: e.target.innerText,
    });
  };

  render() {
    const sidebarVals = [
      {
        icon: overviewIcon,
        name: "Overview",
      },
      {
        icon: reportIcon,
        name: "Report",
      },
      {
        icon: settingsIcon,
        name: "Settings",
      },
      {
        icon: helpIcon,
        name: "Help",
      },
    ];

    const sidebarComponents = sidebarVals.map((sidebarVal, i, arr) => {
      let selected = sidebarVal.name === this.state.selected ? true : false;
      let divider =
        arr.length - 1 === i ? (
          <div className="menu__link-container help-divider"></div>
        ) : (
          ""
        );

      return [
        divider,
        <SidebarLink
          icon={sidebarVal.icon}
          name={sidebarVal.name}
          onClick={this.selectedClickHandler}
          selected={selected}
        />,
      ];
    });
    return (
      <aside className="menu" id="menu">
        <nav className="menu__items">
          {sidebarComponents}
          {/* <SidebarLink icon={overviewIcon} name="Overview" />
          <SidebarLink icon={reportIcon} name="Report" />
          <SidebarLink icon={settingsIcon} name="Settings" />
          <div className="menu__link-container help-divider"></div>
          <SidebarLink icon={helpIcon} name="Help" /> */}
        </nav>
        <div id="bot-sidebar-marker" className="bot-sidebar-marker"></div>
        <ReportsGenerated percentage={this.state.counter} />
      </aside>
    );
  }
}

export default Sidebar;
