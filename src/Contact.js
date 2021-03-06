import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import express from './images/express.png';
import github from './images/github.png';
import gitIcon from './images/gitIcon.png';
import heroku from './images/heroku.png';
import htmlcss from './images/htmlcss.png';
import javascript from './images/javascript.png';
import node from './images/node.png';
import npm from './images/npm.png';
import postgresql from './images/postgresql.png';
import python from './images/python.png';
import rails from './images/rails.png';
import react from './images/react.png';
import slack from './images/slack.svg';
import zeplin from './images/zeplin.png';
import adobe from './images/adobexd.png';

function Contact(props) {
  return (
    <div className="contact-container" id="contact">
      <div className="about-nav">
        <h2>
          <Link smooth to="/#landing">
            Imani Paul
          </Link>
        </h2>
        <div>
          <p>
            <a className="card-nav" href="#about">
              About
            </a>
          </p>
          <p>
            <a className="card-nav" href="#projects">
              Projects
            </a>
          </p>
          <p>
            <a className="card-nav" href="#contact">
              Contact
            </a>
          </p>
        </div>
      </div>
      <div className="contact">
        <h3 className="title">Contact me!</h3>
        <a href="mailto:imani.paul1@gmail.com">Email</a>
        <a
          href="http://www.linkedin.com/in/imani-paul"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/imanipaul"
          rel="noopener noreferrer"
          target="_blank"
        >
          Github
        </a>
      </div>

      <div className="line"></div>

      <div className="framework-logos">
        <img alt="express" className="about-logo" src={express} />
        <img alt="github" className="about-logo" src={github} />
        <img alt="git" className="about-logo" src={gitIcon} />
        <img alt="heroku" className="about-logo" src={heroku} />
        <img alt="html and css" className="about-logo" src={htmlcss} />
        <img alt="javascript" className="about-logo" src={javascript} />
        <img alt="node" className="about-logo" src={node} />
        <img alt="npm" className="about-logo" src={npm} />
        <img alt="postgresql" className="about-logo" src={postgresql} />
        <img alt="python" className="about-logo" src={python} />
        <img alt="rails" className="about-logo" src={rails} />
        <img alt="react" className="about-logo" src={react} />
        <img alt="slack" className="about-logo" src={slack} />
        <img alt="zeplin" className="about-logo" src={zeplin} />
        <img alt="adobexd" className="about-logo" src={adobe} />
      </div>
    </div>
  );
}

export default Contact;
