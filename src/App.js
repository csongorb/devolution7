import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import WIPpage from './components/pages/WIP';
import SomeAnotherPage from './components/pages/SomeAnotherPage';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/wip-page' element={<WIPpage />} />
      <Route path='/another-page' element={<SomeAnotherPage />} />
      <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </Router>      
    </>
  );
}

export default App;
