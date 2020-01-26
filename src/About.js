import React from "react";
import headshot from "./images/headshot.png";

function About(props) {
  return (
    <section className="about-container" id="About">
      <header>
        <span>About</span>
      </header>
      <div className="about-content">
        <img src={headshot} />
        <div className="about-text">
          I am a Software Engineer and results-driven business consultant who
          strives to bridge the gap between the complexities of a corporation’s
          needs and the technology teams that foster their innovation. After
          graduating with my MBA, my passion for creative problem solving drove
          my interest to pursue a career in Web Development. Collaborative,
          driven and eager to learn, I believe that my unique training in both
          business and software development gives me a holistic perspective that
          would allow me to transform early-stage ideas into valuable products
          ready for market.
        </div>
      </div>
    </section>
  );
}

export default About;
