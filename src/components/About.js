import React, { useState, useEffect } from 'react'
import './AboutStyles.css'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import Cool from '../assets/1.jpg'
import Devil from '../assets/3.jpg'
import Jump from '../assets/4.jpg'
import Blow from '../assets/5.jpg'
import Run from '../assets/2.jpg'

const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0)
  
    useEffect(() => {
      setIndex(0)
    }, [])
  
    const next = () => {
      if (index === imgs.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }
    const prev = () => {
      if (index === 0) {
        setIndex(imgs.length - 1)
      } else {
        setIndex(index - 1)
      }
    }
  
  
    return (
      <div className="slideshow">
        <img className="mainImg" src={imgs[index]} alt="" />
        <div className="actions">
          <button onClick={prev}><FaArrowLeft size={40} style={{ color: '#ffffff'}}/></button>
          <button onClick={next}><FaArrowRight size={40} style={{ color: '#ffffff'}}/></button>
        </div>
      </div>
    )
  }


const About = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Bashir Ahmed</h1>
                <p>I grew up in Falls Church, VA, and graduated from Justice High School in June 2021 with an IB Diploma.</p>
                <p>Currently, I am a rising sophomore at Duke University and plan to major in Computer Science with a minor in Economics.</p>
                <p>My interests are Software Engineering, Machine Learning, and Artificial Intelligence.</p>
                <p>Outside of school, I enjoy Basketball, Football, Learning, and Fitness.</p>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack bottom'>
                        {/* <img src={Cool} className='img' alt='' /> */}
                        <Slideshow imgs= {[Cool, Run, Devil, Jump, Blow]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
