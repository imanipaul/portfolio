import React from 'react'


function LandingPage() {
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