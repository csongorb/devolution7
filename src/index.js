import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import "./components/LeafletMap.css"
export * from './components/Constants.js';

function renderApp() {
    createRoot(document.getElementById('root')).render(<App />);
  }
  
  renderApp();