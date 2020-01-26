import React from 'react';
import LandingPage from './LandingPage'
import About from './About'
import Nav from './Nav'
import Projects from './Projects'
import Contact from './Contact'
import './App.scss';

function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <div className = 'line'></div>

      <About />
      <Projects />
      {/* <Contact /> */}


    </div>
  );
}

export default App;
