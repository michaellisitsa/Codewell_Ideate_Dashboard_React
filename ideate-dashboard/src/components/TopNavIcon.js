import React from "react";

class TopNav extends React.Component {
  render() {
    const icon = this.props.icon;
    return (
      <a onClick={this.props.onClick}>
        <img src={icon} alt="" />
      </a>
    );
  }
}

export default TopNav;
