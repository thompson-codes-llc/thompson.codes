import * as React from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import { Layout } from './components/layout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App;