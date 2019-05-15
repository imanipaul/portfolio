import React from 'react'
import headshot from './images/headshot.png'

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
    )
}

export default About