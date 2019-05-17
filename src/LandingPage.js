import React from 'react'
import github from './images/github.png'
import linkedin from './images/linkedin.png'


function LandingPage() {
    return (
        <div className='landing-page-container'>
            <header>
                <div className='logos'>
                    {/* <a href='https://github.com/imanipaul' target='_blank'><img alt='github logo' src={github} /></a> */}
                </div>
                <h1>Imani Paul</h1>
                <div className='logos'>
                    {/* <a href='https://www.linkedin.com/in/imani-paul/' target='_blank'><img alt='linkedin logo' src={linkedin} /></a> */}
                </div>
            </header>
            <nav>
                <div><a href='#about'>About</a></div>
                <div><a href='#projects'>Projects</a></div>
                <div><a href='#contact'>Contact</a></div>
            </nav>
            <section className='slidingVertical'>
                <span className='web-developer'>Web Developer</span>
                <span className='web-developer'>Software Engineer</span>
                <span className='web-developer'>Product Manager</span>
            </section>
        </div>
    )
}

export default LandingPage