import React from 'react'
import github from './images/github.png'
import linkedin from './images/linkedin.png'
// import keyboard from './images/keyboard.jpg'
// import computercode from './images/computercode.jpg'
// import computercoffee from './images/computercoffee.jpg'
// import computerglasses from './images/computerglasses.jpg'
// import computerplant from './images/computerplant.jpg'
// import closedcomputer from './images/closedcomputer.jpg'
// import computercup from './images/computercup.jpg'
// import keyboardmouse from './images/keyboardmouse.jpg'
// import keyboardwhite from './images/keyboardwhite.jpg'

// import angles from './images/angles.jpg'
// import architecture from './images/architecture.jpg'
import artblur from './images/artblur.jpg'
import backgroundblur from './images/backgroundblur.jpg'
import backlitkeyboard from './images/backlitkeyboard.jpg'
import blacklightbulb from './images/blacklightbulb.jpg'
// import circles from './images/circles.jpg'
import computerwhitebackground from './images/computerwhitebackground.jpg'
import lightbulbs from './images/lightbulbs.jpg'
import whitecomputer from './images/whitecomputer.jpg'

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
            <section className='slidingVertical'>
                <span className='web-developer'>Web Developer</span>
                <span className='web-developer'>Software Engineer</span>
                <span className='web-developer'>Product Manager</span>
            </section>
        </div>
    )
}

export default LandingPage