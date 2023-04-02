import * as React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import { Home } from './components/home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;