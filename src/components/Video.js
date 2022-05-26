import React from 'react'
import './VideoStyles.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import earthVideo from '../assets/earth.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={earthVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Bashir. Ahmed.</h1>
                <p>Sophomore at Duke University.</p>
                <div>
                    <a target="_blank" href="https://www.linkedin.com/in/ahhbashir/" rel="noopener noreferrer" title="Bashir's LinkedIn"><FaLinkedin size={55} style={{ color: '#ffffff'}} /></a>
                    <a target="_blank" href="https://www.ahhbashir.com" rel="noopener noreferrer"><FaLinkedin size={45} style={{ color: '#ffffff', opacity: '0'}} /></a>
                    <a target="_blank" href="https://github.com/ahhbashir" rel="noopener noreferrer" title= "Bashir's GitHub"><FaGithub size={55} style={{ color: '#ffffff'}} /></a>
                </div>
            </div>
        </div>
    )
}

export default Video
