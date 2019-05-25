import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'


function LandingPage(props) {
    return (
        <div className='landing-page-container'>
            <header>
                <div className='logos'>
                </div>
                <h1>Imani Paul</h1>
                <div className='logos'>
                </div>
            </header>
            <nav>


                <Link smooth to='/#about'>About</Link>
                <Link smooth to='/#projects'>Projects</Link>
                <Link smooth to='/#contact'>Contact</Link>
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