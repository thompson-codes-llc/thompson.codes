import React, { Component } from "react";
import PropTypes from "prop-types";
import {hot} from "react-hot-loader";
import "../styles/Profiles.css";

import Profile from './profile'

class Profiles extends Component {
  constructor() {
    super();
    this.state = {
      people: {
        Traci: "http://traci.thompson.codes",
        Bryan: "http://www.snowboardtechie.com"
      },
    };
  }

  static propTypes = {
    showProfiles: PropTypes.bool,
    showIndex: PropTypes.func.isRequired,
    showBanner: PropTypes.func.isRequired,
  }
  render() {
    if (!this.props.showProfiles) {
      return null;
    }

    const profile_size = this.state.expand ? "small_profile" : "large_profile";

    return (
      <div className="profiles_container">
        <div className="header">
          <button className="top_button" onClick={this.props.showBanner}> {/* Adjust this to showIndex to bring back middle menu */}
            <img src={require('../assets/down-arrow.png')}></img>
          </button>
        </div>
        <div className='profiles'>
          {Object.entries(this.state.people).map(function(person) {
            return <Profile key={person} person={person} profile_size={profile_size}/>
          })}
        </div>
      </div>
    );
  }
}

export default hot(module)(Profiles);
