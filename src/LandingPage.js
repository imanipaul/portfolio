import React from 'react'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
import keyboard from './images/keyboard.jpg'
import computercode from './images/computercode.jpg'
import computercoffee from './images/computercoffee.jpg'
import computerglasses from './images/computerglasses.jpg'
import computerplant from './images/computerplant.jpg'
import closedcomputer from './images/closedcomputer.jpg'
import computercup from './images/computercup.jpg'

function LandingPage() {
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
                <img src={computercup} />
                <div className='web-developer'>Web Developer</div>
            </section>
        </div>
    )
}

export default LandingPage