import React from 'react'

function Contact(props) {
    return (
        <div className='contact-container'>
            <div className='about-nav'>
                <h2>Imani Paul</h2>
                <p>About</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
            <h3>Contact me!</h3>
            <a href='mailto:imani.paul1@gmail.com'>Email me!</a>
            <a href='http://www.linkedin.com/in/imani-paul' target='_blank'>LinkedIn</a>
            <a href='https://github.com/imanipaul' target='_blank'>Github</a>
        </div>
    )
}

export default Contact