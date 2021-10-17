import React from "react";
import styles from "../styles/SidebarLink.css";
import classNames from "classnames";

let cx = classNames.bind(styles);

class SidebarLink extends React.Component {
  render() {
    let className = cx("menu__links", {
      "selected-link": this.props.selected,
    });
    const icon = this.props.icon;
    return (
      <div className="menu__link-container">
        <img src={icon} alt="" className="menu__link-icon" />
        <a className={className} onClick={this.props.onClick}>
          {this.props.name}
        </a>
      </div>
    );
  }
}

export default SidebarLink;
