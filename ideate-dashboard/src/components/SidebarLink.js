import React from "react";
import "../styles/SidebarLink.css";

class SidebarLink extends React.Component {
  render() {
    const icon = this.props.icon;
    return (
      <div className="menu__link-container">
        <img src={icon} alt="" className="menu__link-icon" />
        <a className="menu__links" href="#">
          {this.props.name}
        </a>
      </div>
    );
  }
}

export default SidebarLink;
