import React, { Component } from "react";
import PropTypes from "prop-types";
import {hot} from "react-hot-loader";
import "../styles/details.css";

class Details extends Component {
  constructor() {
    super(); // populates this.props (fixed for lifetime of component)
    this.state = { // data that will change using setState
      contact: {
        'Email': 'contact@thompson.codes',
        'Phone': '303-870-9814'
      },
      about: {
        'About': 'Thompson Codes is co-founded and run by programmer couple Traci and Bryan Thompson'
      }
    }
  }
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    showDetails: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }

  render() {
    if (!this.props.showDetails) {
      return null;
    } else {
      const title = this.props.title.toLowerCase();
      const active = this.props.showDetails ? ' active' : '';

      return (
        <div className={`detail ${active}`}>
          {Object.keys(this.state).map((key, value) => {
            if (key == title) {
              return Object.keys(this.state[key]).map((property) => {
                return <div key={property}>
                  {this.state[key][property]}
                </div>
              });
            }
          }, this)}
        </div>
      );
    }
  }
}

export default hot(module)(Details);
