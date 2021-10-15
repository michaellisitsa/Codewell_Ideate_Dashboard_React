import React from "react";
import logo from "../Assets/Logo.svg";
import notificationIcon from "../Assets/Notification.svg";
import userIcon from "../Assets/User.svg";
import userAvatar from "../Assets/User Avatar.svg";
import hamburgerIcon from "../Assets/Hamburger Menu.svg";
import TopNavIcon from "./TopNavIcon";

class TopNav extends React.Component {
  handleIconClick = (e) => {
    e.preventDefault();
    console.log(e.target.outerHTML);
  };
  render() {
    return (
      <div className="top-nav">
        <a href="" className="company-logo">
          <img src={logo} alt="" />
        </a>
        <div className="searchUser">
          <form action="#" className="search">
            <input
              type="text"
              name="search-reports"
              id="search-reports"
              className="search-reports"
              placeholder="Search Reports"
              // style="background-image: url('Assets/Search.svg')"
            />
          </form>
          <div className="user">
            <TopNavIcon
              icon={notificationIcon}
              onClick={this.handleIconClick}
            />
            <TopNavIcon icon={userIcon} onClick={this.handleIconClick} />
            <TopNavIcon icon={userAvatar} onClick={this.handleIconClick} />
          </div>
          <div className="hamburger">
            <img src={hamburgerIcon} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
