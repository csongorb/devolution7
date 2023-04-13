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

  const express = require("express");
  const path = require("path");

  const app = express();

  app.use(express.static(path.join(__dirname, "dist")));

  app.use((req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });

  app.listen(process.env.PORT || 3000, () => {
    console.log("Server Started");
  });

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      </Routes>
    </Router>      
    </>
  );
}

export default App;
