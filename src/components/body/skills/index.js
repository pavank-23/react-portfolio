import React from 'react'
import Separator from '../../../common/separator'
import './skills.css'

function Skills() {
  return (
    <div>
        <Separator />
        <label className='section-title'>.skills()</label>
        <div className='skill-text'>
            I'm a beginner in most of these,well anyways...
        </div>
        <div className='skill-images'>
            <img src={require('../../../assets/icons/python.png')}></img>
            <img src={require('../../../assets/icons/html5.png')}></img>
            <img src={require('../../../assets/icons/css3.png')}></img>
            <img src={require('../../../assets/icons/js.png')}></img>
            <img src={require('../../../assets/icons/react.png')}></img>
            <img src={require('../../../assets/icons/blender.png')}></img>
        </div>
    </div>
  )
}

export default Skills