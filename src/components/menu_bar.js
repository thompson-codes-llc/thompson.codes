import React, { Component } from "react";
import PropTypes from "prop-types";
import {hot} from "react-hot-loader";
import "../styles/menu_bar.css";
import MenuBarTitle from './menu_bar_title';
import Details from './details';


class MenuBar extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  toggleDetails = () => {
    this.props.setActiveComponent(this.props.id);
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    showDetails: PropTypes.bool.isRequired,
    toggleDetails: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  }

  render() {
    let details;
    let status = this.props.active ? ' active' : ' inactive';
    if (this.props.active) {
      details = <Details key={this.props.title} title={this.props.title} id={this.props.id} showDetails={this.props.active} />;
    } else {
      details = '';
    }
    return (
      <div className={`menu_bar menu_bar_${this.props.id} ${status}`} onClick={this.toggleDetails}>
        <MenuBarTitle title={this.props.title} />
        <div className={"details_container active"}>
          {details}
        </div>
      </div>
    )
  }
}

export default hot(module)(MenuBar);