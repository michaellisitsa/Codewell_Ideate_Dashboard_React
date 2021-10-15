import React from "react";

class TopNav extends React.Component {
  handleIconClick = (e) => {
    e.preventDefault();
    console.log("icon clicked from TopNavIcon");
  };
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
