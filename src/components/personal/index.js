import React from 'react'
import Separator from '../../common/separator'
import './personal.css'

function Personal() {
  return (
    <div>
        <Separator />
        <label className='section-title'>.about()</label>
        <div className='info'>
          <p>
            Hello there. <br />
            I'm Pavan currently undertaking CS in VIT.
            <br/>I'm a newbie in CS and am taking my time exploring the various fields.
          </p>
            <img src={require("../../assets/person.png")} className='personPic'></img>
        </div>
    
    </div>
    
  )
}

export default Personal