import React from 'react'
import github from './images/github.png'
import linkedin from './images/linkedin.png'

function LandingPage(props) {
    return (
        <div className='landing-page-container'>
            <header>
                <div>
                    <img alt='github logo' src={github} />
                </div>
                <h1>Imani Paul</h1>
                <div>
                    <img alt='linkedin logo' src={linkedin} />
                </div>
            </header>
            <nav>
                <div>About</div>
                <div>Projects</div>
                <div>Contact</div>
            </nav>


        </div>
    )
}

export default LandingPage