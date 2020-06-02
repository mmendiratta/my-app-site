import React from 'react';
import './App.css';
import Header from './components/Header.js'
import About from './components/About.js'
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
    </div>
  );
}

export default App;
