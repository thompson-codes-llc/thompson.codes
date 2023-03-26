import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/banner.css";

import mountain from '../assets/mountain.png';

export default class Banner extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  static propTypes = {
    showBanner: PropTypes.bool.isRequired
  }

  render() {
    if (!this.props.showBanner) {
      return null;
    }

    return (
      <div className="front">
        <div className="banner">
          <h1 className="title_name first">THOMPSON</h1>
            <a href="/">
              <img className="thompson_codes_logo" alt="Thompson Codes Logo" src={mountain} />
            </a>
          <h1 className="title_name second">CODES</h1>
        </div>
      </div>
    )
  }
}
