import React from 'react';
import LandingPage from './LandingPage'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import './App.css';

function App() {
  return (
    <div className="App">
      <LandingPage />
      <hr />
      <About />
      <hr />
      <Projects />
      <hr />
      <Contact />


    </div>
  );
}

export default App;
