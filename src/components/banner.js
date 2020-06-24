import React, { Component } from "react";
import PropTypes from "prop-types";
import {hot} from "react-hot-loader";
import "../styles/Banner.css";

import mountain from '../assets/mountain.png';

class Banner extends Component {
  render() {
    return (
      <div className="front">
        <div className="banner">
          <h1 className="title_name first">THOMPSON CODES</h1>
        </div>
        <div>
          <img className="title_image" src={mountain} />
        </div>
      </div>
    )
  }
}

export default hot(module)(Banner);
