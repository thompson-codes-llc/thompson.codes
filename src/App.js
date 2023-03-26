import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Banner from './components/banner';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

class App extends Component {
   constructor() {
    super();
    this.state = {
      showBanner: true,
      showIndex: false,
    }
  }

  render() {
    return (
      <>
        <Banner showBanner={this.state.showBanner} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    )
  }
}

export default App;
