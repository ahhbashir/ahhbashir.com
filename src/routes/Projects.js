import React from 'react'
import Navbar from '../components/Navbar'
import ProjectsCards from '../components/Projects'
import HeroImage from '../components/HeroImage'

const Projects = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='PROJECTS.' text='' />
            <ProjectsCards />
        </div>
    )
}

export default Projects