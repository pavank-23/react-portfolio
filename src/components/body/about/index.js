import React from 'react'
import "./about.css"

function About() {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
                Hi,I'm 
                <br /><span className='info-name'>Pavan.</span>
                <br />I'm trying out Web Dev.
            </div>
            <div className='about-photo'>
                <img src={require("../../../assets/coding.png")} className='pic' />
            </div>
        </div>
    </div>
  )
}

export default About