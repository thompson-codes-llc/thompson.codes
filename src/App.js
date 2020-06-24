import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import App from './components/App.js'

class Application extends Component {
  render() {
    return (
      <App />
    )
  }
}

export default Application;
