import React from 'react'
import './ProjectsStyles.css'
import { FaGithub } from 'react-icons/fa'
import Wordle from '../assets/wordle.jpg'
import IDC from '../assets/idc.jpg'
import Timer from '../assets/timer.jpg'


const Projects = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- WordleBot -</h3>
                    <span className='bar'></span>
                    <img src={Wordle} className='img' alt='' />
                    <p> This Bot is able to solve the daily Worlde. </p>
                    <p> Language: Python </p>
                    <a target="_blank" href="https://github.com/ahhbashir/WordleBot" rel="noopener noreferrer" title= "Bashir's GitHub"><FaGithub size={55} style={{ color: '#ffffff'}}/></a>
                </div>
                <div className='card'>
                    <h3>- IDC Challenge -</h3>
                    <span className='bar'></span>
                    <img src={IDC} className='img' alt='' />
                    <p> Is able to complete all of the ECE 110 objectives. </p>
                    <p> Language: C++ </p>
                    <a target="_blank" href="https://github.com/ahhbashir/IDC-Challenge" rel="noopener noreferrer" title= "Bashir's GitHub"><FaGithub size={55} style={{ color: '#ffffff'}}/></a>
                </div>
                <div className='card'>
                    <h3>- HandWashing Timer -</h3>
                    <span className='bar'></span>
                    <img src={Timer} className='img' alt='' />
                    <p> Automated hands-free COVID-19 specialized handwashing timer. </p>
                    <p> Language: C++ </p>
                    <a target="_blank" href="https://github.com/ahhbashir/Arduino-Handwashing-Timer" rel="noopener noreferrer" title= "Bashir's GitHub"><FaGithub size={55} style={{ color: '#ffffff'}}/></a>
                </div>
                <div className='card'>
                    <h3>- More Projects -</h3>
                    <span className='bar'></span>
                    <p> Find more projects on my GitHub. </p>
                    <a target="_blank" href="https://github.com/ahhbashir" rel="noopener noreferrer" title= "Bashir's GitHub"><FaGithub size={55} style={{ color: '#ffffff'}}/></a>
                </div>
            </div>
        </div>
    )
}

export default Projects
