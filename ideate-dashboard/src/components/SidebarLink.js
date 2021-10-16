import React from "react";
import styles from "../styles/SidebarLink.css";
import classNames from "classnames";

let cx = classNames.bind(styles);

class SidebarLink extends React.Component {
  state = { selected: true };
  constructor(props) {
    super(props);
  }

  onClickHandler = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };
  render() {
    let className = cx("menu__links", {
      "selected-link": this.state.selected,
    });
    const icon = this.props.icon;
    return (
      <div className="menu__link-container">
        <img src={icon} alt="" className="menu__link-icon" />
        <a className={className} onClick={this.onClickHandler}>
          {this.props.name}
        </a>
      </div>
    );
  }
}

export default SidebarLink;
