import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function LandingPage(props) {
  return (
    <section className="landing-page-container">
      <h1>Software Developer</h1>
      <h2>I build exceptional, high-quality websites and applications.</h2>
      <div className="content-button">Get In Touch</div>
      {/* <div className = 'line'></div> */}
      {/* <div className="line"></div> */}
    </section>
  );
}

export default LandingPage;
