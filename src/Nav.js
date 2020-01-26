import React from 'react'
import logo from './images/logo.png'

export default function Nav() {
    return (
        <div className = 'nav'>
            <img src={logo} />
            <nav>
                <a href='#'>About</a>
                <a href='#'>Work</a>
                <a href='#'>Contact</a>
                <a href='#'>Resume</a>
            </nav>
        </div>
    )
}