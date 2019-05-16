import React from 'react'
import speedtype from './images/speedtype.png'
import recollect from './images/recollect.png'
import chumleys from './images/chumleys.png'
import ensemble from './images/ensemble.png'
import allthingsmusic from './images/allthingsmusic.png'

function Projects(props) {
    return (
        <div className='projects-container'>
            <div className='about-nav'>
                <h2>Imani Paul</h2>
                <p>About</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
            <div className='all-projects'>


                <div className='project-card'>
                    <img className='project-card-image' alt='speedtype' src={speedtype} />
                    <div className='hover-text'>
                        <div className='text-description'>
                            <h3>Speed Type</h3>
                            <p>Typing game using vanilla Javascript and CSS animations</p>
                        </div>
                    </div>
                </div>


                <div className='project-card'>
                    <img className='project-card-image' alt='All Things Music' src={allthingsmusic} />
                    <div className='hover-text'>
                        <div className='text-description'>
                            <h3>All Thing Music</h3>
                            <p>Popular music search engine using React and LastFM API</p>
                        </div>
                    </div>

                </div>


                <div className='project-card'>
                    <img className='project-card-image' alt='Ensemble' src={ensemble} />
                    <div className='hover-text'>
                        <div className='text-description'>
                            <h3>Ensemble</h3>
                            <p>A full stack site for connecting with fellow students and instructors</p>
                        </div>
                    </div>
                </div>


                <div className='project-card'>
                    <img className='project-card-image' alt='chumleys' src={chumleys} />
                    <div className='hover-text'>
                        <div className='text-description'>
                            <h3>Chumley's</h3>
                            <p>Restaurant site redesign for local NYC eatery.
                            Created through collaboration with UX designers</p>
                        </div>
                    </div>
                </div>


                <div className='project-card' >
                    <img className='project-card-image' alt='ReCollect' src={recollect} />
                    <div className='hover-text'>
                        <div className='text-description'>
                            <h3>ReCollect</h3>
                            <p>Full stack inventory app for household essentials</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects