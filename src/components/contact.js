import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "../styles/banner.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <h1>
          Contact
        </h1>
      </div>
    );
  }
}

export default hot(module)(Contact);
