import React from 'react'
import github from './images/github.png'
import linkedin from './images/linkedin.png'

function LandingPage(props) {
    return (
        <div className='landing-page-container'>
            <header>
                <div className='logos'>
                    <img alt='github logo' src={github} />
                </div>
                <h1>Imani Paul</h1>
                <div className='logos'>
                    <img alt='linkedin logo' src={linkedin} />
                </div>
            </header>
            <nav>
                <div>About</div>
                <div>Projects</div>
                <div>Contact</div>
            </nav>
            <section>
                Content
            </section>
            <section>
                Content
            </section>
            <section>
                Content
            </section>


        </div>
    )
}

export default LandingPage