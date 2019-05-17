import React from 'react'
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

function Contact(props) {
    return (
        <div className='contact-container' id='contact'>
            <div className='about-nav'>
                <h2><a href='#'>Imani Paul</a></h2>
                <div>
                    <p><a className='card-nav' href='#about'>About</a></p>
                    <p><a className='card-nav' href='#projects'>Projects</a></p>
                    <p><a className='card-nav' href='#contact'>Contact</a></p>
                </div>
            </div>
            <div className='contact'>
                <h3 className='title'>Contact me!</h3>
                <a href='mailto:imani.paul1@gmail.com'>Email</a>
                <a href='http://www.linkedin.com/in/imani-paul' target='_blank'>LinkedIn</a>
                <a href='https://github.com/imanipaul' target='_blank'>Github</a>
            </div>
            <div className='line'>

            </div>
            {/* <h2 className='title'>Skills</h2> */}
            {/* <div> */}
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
            {/* </div> */}
        </div>
    )
}

export default Contact