import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hot } from "react-hot-loader";

import Banner from './banner';
import Index from './index';
import Profiles from './profiles';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="front">
          <Banner />
        </div>
      </BrowserRouter>
    )
  }
}
  
export default hot(module)(App);
