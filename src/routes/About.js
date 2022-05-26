import React from 'react'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import AboutSection from '../components/About'

const About = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='ABOUT ME.' text='' />
            <AboutSection />
        </div>
    )
}

export default About