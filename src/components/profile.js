import React, { Component } from "react";
import PropTypes from "prop-types";
import {hot} from "react-hot-loader";

// import ProfileText from './profile_text';    NOTE: COMMENTED OUT AS NOT CURRENTLY USED

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      results: {}
    }
  }

  static propTypes = {
    person: PropTypes.array.isRequired,
  }
  render() {
    return (
      <div className={'profile' + ' ' + this.props.person[0].toLowerCase()}>
        <a className='profile_link' href={this.props.person[1]} target="_blank" rel="noopener noreferrer" />
      </div>
    );
  }
}

export default hot(module)(Profile);
