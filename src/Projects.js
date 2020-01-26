import React from "react";
import speedtype from "./images/speedtype-best.png";
import speedtypeTwo from "./images/speedtype-two.png";
import recollect from "./images/recollect-best.png";
import recollectTwo from "./images/recollect-two.png";
import github from "./images/github-icon.png";
import link from "./images/external-link.png";
import chumleys from "./images/chumleys-best.png";
import chumleysTwo from "./images/chumleys-two.png";
import ensemble from "./images/ensemble-best.png";
import ensembleTwo from "./images/ensemble-two.png";
import allthingsmusic from "./images/allthingsmusic-best.png";
import allthingsmusicTwo from "./images/allthingsmusic-two.png";

function Projects() {
  return (
    <section className="projects-container" id="Projects">
      <header>
        <span>Projects</span>
      </header>

      <div className="project">
        Recollect
        <div className="project-images">
          <img src={recollect} />
          <img src={recollectTwo} />
        </div>
        <div className="project-description">
          Typing game that tests the user's ability to type words before they
          leave the screen. Built Using vanilla Javascript and CSS animations
        </div>
        <div className="project-links">
          <a href="https://github.com/imanipaul/ReCollect">
            <img src={github} />
          </a>
          <a href="http://recollect.surge.sh/">
            <img src={link} />
          </a>
        </div>
      </div>

      <div className="project">
        Chumley's Restaurant Site Redesign
        <div className="project-images">
          <img src={chumleys} />
          <img src={chumleysTwo} />
        </div>
        <div className="project-description">
          Typing game that tests the user's ability to type words before they
          leave the screen. Built Using vanilla Javascript and CSS animations
        </div>
        <div className="project-links">
          <a href="https://github.com/imanipaul/Chumleys">
            <img src={github} />
          </a>
          <a href="http://chumleys-app.surge.sh/">
            <img src={link} />
          </a>
        </div>
      </div>

      <div className="project">
        Ensemble
        <div className="project-images">
          <img src={ensemble} />
          <img src={ensembleTwo} />
        </div>
        <div className="project-description">
          Typing game that tests the user's ability to type words before they
          leave the screen. Built Using vanilla Javascript and CSS animations
        </div>
        <div className="project-links">
          <a href="https://github.com/imanipaul/Ensemble">
            <img src={github} />
          </a>
          <a href="http://ensemble-ga.surge.sh/">
            <img src={link} />
          </a>
        </div>
      </div>

      <div className="project">
        SpeedType
        <div className="project-images">
          <img src={speedtype} />
          <img src={speedtypeTwo} />
        </div>
        <div className="project-description">
          Typing game that tests the user's ability to type words before they
          leave the screen. Built Using vanilla Javascript and CSS animations
        </div>
        <div className="project-links">
          <a href="https://github.com/imanipaul/speed-type">
            <img src={github} />
          </a>
          <a href="https://imanipaul.github.io/speed-type/">
            <img src={link} />
          </a>
        </div>
      </div>

      <div className="project">
        All Things Music
        <div className="project-images">
          <img src={allthingsmusic} />
          <img src={allthingsmusicTwo} />
        </div>
        <div className="project-description">
          Typing game that tests the user's ability to type words before they
          leave the screen. Built Using vanilla Javascript and CSS animations
        </div>
        <div className="project-links">
          <a href="https://github.com/imanipaul/all-things-music">
            <img src={github} />
          </a>
          <a href="https://all-things-music.herokuapp.com/">
            <img src={link} />
          </a>
        </div>
      </div>
    </section>
  );
  // return (
  //     <div className='projects-container' id='projects'>
  //         <div className='about-nav' id='projects-nav'>
  //             <h2><a href='#'>Imani Paul</a></h2>
  //             <div>
  //                 <p><a className='card-nav' href='#about'>About</a></p>
  //                 <p><a className='card-nav' href='#projects'>Projects</a></p>
  //                 <p><a className='card-nav' href='#contact'>Contact</a></p>
  //             </div>
  //         </div>
  //         <div className='title'>Projects</div>
  //         <div className='all-projects'>

  //             <div className='project-card' >
  //                 <img className='project-card-image' alt='ReCollect' src={recollect} />
  //                 <div className='hover-text'>
  //                     <div className='text-description'>
  //                         <h3>ReCollect</h3>
  //                         <p>Full stack inventory app for household essentials</p>
  //                         <a target='_blank' rel="noopener noreferrer" href='http://recollect.surge.sh'>Visit</a>
  //                         <a target='_blank' rel="noopener noreferrer" href='https://github.com/imanipaul/ReCollect'>Code</a>
  //                     </div>
  //                 </div>
  //             </div>

  //             <div className='project-card'>
  //                 <img className='project-card-image' alt='speedtype' src={speedtype} />
  //                 <div className='hover-text'>
  //                     <div className='text-description'>
  //                         <h3>Speed Type</h3>
  //                         <p>Typing game using vanilla Javascript and CSS animations</p>
  //                         <a target='_blank' rel="noopener noreferrer" href='https://imanipaul.github.io/speed-type/'>Visit</a>
  //                         <a target='_blank' rel="noopener noreferrer" href='https://github.com/imanipaul/speed-type'>Code</a>
  //                     </div>
  //                 </div>
  //             </div>

  //             <div className='project-card'>
  //                 <img className='project-card-image' alt='Ensemble' src={ensemble} />
  //                 <div className='hover-text'>
  //                     <div className='text-description'>
  //                         <h3>Ensemble</h3>
  //                         <p>A full stack site for connecting with fellow students and instructors</p>
  //                         <a target='_blank' rel="noopener noreferrer" href='http://ensemble-ga.surge.sh/'>Visit</a>
  //                         <a target='_blank' rel="noopener noreferrer" href='https://github.com/imanipaul/Ensemble'>Code</a>
  //                     </div>
  //                 </div>
  //             </div>

  //             <div className='project-card'>
  //                 <img className='project-card-image' alt='chumleys' src={chumleys} />
  //                 <div className='hover-text'>
  //                     <div className='text-description'>
  //                         <h3>Chumley's</h3>
  //                         <p>Restaurant site redesign for local NYC eatery.
  //                         Created through collaboration with UX designers</p>
  //                         <a target='_blank' rel="noopener noreferrer" href='http://chumleys-app.surge.sh/'>Visit</a>
  //                         <a target='_blank' rel="noopener noreferrer" href='https://github.com/imanipaul/Chumleys'>Code</a>
  //                     </div>
  //                 </div>
  //             </div>

  //             <div className='project-card'>
  //                 <img className='project-card-image' alt='All Things Music' src={allthingsmusic} />
  //                 <div className='hover-text'>
  //                     <div className='text-description'>
  //                         <h3>All Things Music</h3>
  //                         <p>Popular music search engine using React and LastFM API</p>
  //                         <a target='_blank' rel="noopener noreferrer" href='https://all-things-music.herokuapp.com/'>Visit</a>
  //                         <a target='_blank' rel="noopener noreferrer" href='https://github.com/imanipaul/all-things-music'>Code</a>
  //                     </div>
  //                 </div>
  //             </div>

  //         </div>

  //     </div>
  // )
}

export default Projects;
