import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TextBlocks from './components/TextBlocks';
import Footer from './components/Footer';
import './App.css';
import logo from "./assets/Logo_Devolution_small.png"

function App() {

  const [scrollToId, setScrollToId] = useState(null);

  useEffect(() => {
    if (scrollToId) {
      const el = document.getElementById(scrollToId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      setScrollToId(null);
    }
  }, [scrollToId]);

  const handleNavbarItemClick = (id) => {
    setScrollToId(id);
  };
  
  return (
    <div>
    <div className='logo-area'>
      <div className="navbar-logo">
        <img src={logo} alt="devolution logo"/>
      </div>
    </div>
      <Navbar onItemClick={handleNavbarItemClick}/>
      <TextBlocks />
      <Footer />
    </div>

  );
}
export default App;
