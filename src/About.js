import React from 'react'
import headshot from './images/headshot.png'
import express from './images/express.png'
import github from './images/github.png'
import gitIcon from './images/gitIcon.png'
import heroku from './images/heroku.png'
import htmlcss from './images/htmlcss.png'
import javascript from './images/javascript.png'
import node from './images/node.png'
import npm from './images/npm.png'
import postgresql from './images/postgresql.png'
import python from './images/python.png'
import rails from './images/rails.png'
import react from './images/react.png'
import slack from './images/slack.svg'
import zeplin from './images/zeplin.png'


function About(props) {
    return (
        <div className='about-container'>
            <div className='about-nav'>
                <h2>Imani Paul</h2>
                <p>About</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
            <div className='about-content'>
                <div className='framework-logos'>
                    <img className='about-logo' src={express} />
                    <img className='about-logo' src={github} />
                    <img className='about-logo' src={gitIcon} />
                    <img className='about-logo' src={heroku} />
                    <img className='about-logo' src={htmlcss} />
                    <img className='about-logo' src={javascript} />
                    <img className='about-logo' src={node} />
                    <img className='about-logo' src={npm} />
                    <img className='about-logo' src={postgresql} />
                    <img className='about-logo' src={python} />
                    <img className='about-logo' src={rails} />
                    <img className='about-logo' src={react} />
                    <img className='about-logo' src={slack} />
                    <img className='about-logo' src={zeplin} />

                </div>
                <div className='about-section'>
                    <div>
                        <img className='headshot' alt='headshot' src={headshot} />
                    </div>
                    <div className='brand-statement-container'>
                        <p>
                            I am a Software Engineer and results-driven business consultant who strives to bridge the gap between the complexities of a corporation’s needs and the technology teams that foster their innovation. Collaborative, driven and eager to learn, I believe that my unique training in both business and software development gives me a holistic perspective that would allow me to transform early-stage all ideas into valuable products ready for market.
            </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About