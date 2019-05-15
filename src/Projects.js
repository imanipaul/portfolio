import React from 'react'

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
                    Project 1
                    <div className='project-card-description'>
                        Project 1 Description
                </div>
                </div>


                <div className='project-card'>
                    Project 2
                    <div className='project-card-description'>
                        Project 2 Description
                </div>
                </div>


                <div className='project-card'>
                    Project 3
                    <div className='project-card-description'>
                        Project 3 Description
                </div>
                </div>


                <div className='project-card'>
                    Project 4
                    <div className='project-card-description'>
                        Project 4 Description
                </div>
                </div>


                <div className='project-card'>
                    Project 5
                    <div className='project-card-description'>
                        Project 5 Description
                </div>
                </div>

            </div>
        </div>
    )
}

export default Projects