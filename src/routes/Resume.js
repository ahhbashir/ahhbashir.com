import React from 'react'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import ResumeSection from '../components/Resume'

const Resume = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='RESUME.' text='' />
            <ResumeSection />
        </div>
    )
}

export default Resume