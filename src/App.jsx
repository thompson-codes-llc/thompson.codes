import * as React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import { Layout } from './components/layout';

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}

export default App;