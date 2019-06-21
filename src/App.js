import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Banner from './components/Banner'
import Index from './components/index'
import Profiles from './components/Profiles'

class App extends Component {
  constructor() {
    super();
    this.state = {
      showBanner: true,
      showIndex: false,
    }
  }

  showIndex = () => {
    this.setState({
      showIndex: true,
      showBanner: false,
      showProfiles: false,
    });
  }

  showBanner = () => {
    this.setState({
      showIndex: false,
      showBanner: true,
      showProfiles: false,
    })
  }

  showProfiles = () => {
    this.setState({
      showIndex: false,
      showBanner: false,
      showProfiles: true,
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="front">
          <Banner showBanner={this.state.showBanner} showIndex={this.showIndex} showProfiles={this.showProfiles} />
          <Index showIndex={this.state.showIndex} showBanner={this.showBanner} showProfiles={this.showProfiles} />
          <Profiles showProfiles={this.state.showProfiles} showIndex={this.showIndex} showBanner={this.showBanner} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
