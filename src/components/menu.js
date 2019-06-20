import React, { Component } from "react";
import PropTypes from "prop-types";
import {hot} from "react-hot-loader";
import "../styles/menu.css";

import MenuBar from './menu_bar';

class Menu extends Component {
  constructor() {
    super();
    this.state = {
      pages: [
        {'title': 'About', 'active': false},
        // {'title': 'Second Thing', 'active': false},   HIDING THESE SINCE THEY AREN'T CURRENTLY USED
        // {'title': 'Third Thing', 'active': false},    HIDING THESE SINCE THEY AREN'T CURRENTLY USED
        {'title': 'Contact', 'active': false},  
      ],
    }
  }

  setActiveComponent = (id) => {
    const {pages} = this.state;
    Object.entries(pages).map((property) => {
      pages[property[0]].active = (id == property[0] && !pages[property[0]].active);
    });
    this.setState({
      pages,
    });
  }

  static propTypes = {
    pages: PropTypes.array.isRequired,
  }
  render() {
    return (
      <div className="menu_and_details">
        {Object.entries(this.state.pages).map(function(page) {
          return <MenuBar key={page[0]} title={page[1].title} id={page[0]} setActiveComponent={this.setActiveComponent} active={page[1].active} />
        }, this )}
      </div>
    )
  }
}

export default hot(module)(Menu);
