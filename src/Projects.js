import React from 'react'
import speedtype from './images/speedtype-best.png'
import recollect from './images/recollect-best.png'
import chumleys from './images/chumleys-best.png'
import ensemble from './images/ensemble-best.png'
import allthingsmusic from './images/allthingsmusic-best.png'

function Projects(props) {

    return (
        <section className = 'projects-container'>
            <header>Projects</header>
            <div className = 'project'>
                <div className = 'project-images'>
                    <img src={speedtype} />
                    <img src={recollect} />
                </div>
                <div className = 'project-description'>
                Full stack inventory app for household essentials
                </div>
                <div className = 'project-links'>

                </div>
            </div>
        </section>
    )
    // return (
    //     <div className='projects-container' id='projects'>
    //         <div className='about-nav' id='projects-nav'>
    //             <h2><a href='#'>Imani Paul</a></h2>
    //             <div>
    //                 <p><a className='card-nav' href='#about'>About</a></p>
    //                 <p><a className='card-nav' href='#projects'>Projects</a></p>
    //                 <p><a className='card-nav' href='#contact'>Contact</a></p>
    //             </div>
    //         </div>
    //         <div className='title'>Projects</div>
    //         <div className='all-projects'>

    //             <div className='project-card' >
    //                 <img className='project-card-image' alt='ReCollect' src={recollect} />
    //                 <div className='hover-text'>
    //                     <div className='text-description'>
    //                         <h3>ReCollect</h3>
    //                         <p>Full stack inventory app for household essentials</p>
    //                         <a target='_blank' rel="noopener noreferrer" href='http://recollect.surge.sh'>Visit</a>
    //                         <a target='_blank' rel="noopener noreferrer" href='https://github.com/imanipaul/ReCollect'>Code</a>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div className='project-card'>
    //                 <img className='project-card-image' alt='speedtype' src={speedtype} />
    //                 <div className='hover-text'>
    //                     <div className='text-description'>
    //                         <h3>Speed Type</h3>
    //                         <p>Typing game using vanilla Javascript and CSS animations</p>
    //                         <a target='_blank' rel="noopener noreferrer" href='https://imanipaul.github.io/speed-type/'>Visit</a>
    //                         <a target='_blank' rel="noopener noreferrer" href='https://github.com/imanipaul/speed-type'>Code</a>
    //                     </div>
    //                 </div>
    //             </div>




    //             <div className='project-card'>
    //                 <img className='project-card-image' alt='Ensemble' src={ensemble} />
    //                 <div className='hover-text'>
    //                     <div className='text-description'>
    //                         <h3>Ensemble</h3>
    //                         <p>A full stack site for connecting with fellow students and instructors</p>
    //                         <a target='_blank' rel="noopener noreferrer" href='http://ensemble-ga.surge.sh/'>Visit</a>
    //                         <a target='_blank' rel="noopener noreferrer" href='https://github.com/imanipaul/Ensemble'>Code</a>
    //                     </div>
    //                 </div>
    //             </div>


    //             <div className='project-card'>
    //                 <img className='project-card-image' alt='chumleys' src={chumleys} />
    //                 <div className='hover-text'>
    //                     <div className='text-description'>
    //                         <h3>Chumley's</h3>
    //                         <p>Restaurant site redesign for local NYC eatery.
    //                         Created through collaboration with UX designers</p>
    //                         <a target='_blank' rel="noopener noreferrer" href='http://chumleys-app.surge.sh/'>Visit</a>
    //                         <a target='_blank' rel="noopener noreferrer" href='https://github.com/imanipaul/Chumleys'>Code</a>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div className='project-card'>
    //                 <img className='project-card-image' alt='All Things Music' src={allthingsmusic} />
    //                 <div className='hover-text'>
    //                     <div className='text-description'>
    //                         <h3>All Things Music</h3>
    //                         <p>Popular music search engine using React and LastFM API</p>
    //                         <a target='_blank' rel="noopener noreferrer" href='https://all-things-music.herokuapp.com/'>Visit</a>
    //                         <a target='_blank' rel="noopener noreferrer" href='https://github.com/imanipaul/all-things-music'>Code</a>
    //                     </div>
    //                 </div>
    //             </div>

    //         </div>

    //     </div>
    // )
}

export default Projects