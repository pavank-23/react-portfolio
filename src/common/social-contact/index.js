import React from 'react'
import './social-contact.css'
import {socialData} from '../../data/social'

function SocialContact() {
  const data = socialData;
  return (
    <div className='social-contact'>
        {data.map((item)=>{
            return (
                <a href='item.link'>
                    <div className='social-icon-div'>
                        <img src={item.icon} className='social-icon'></img>
                    </div>
                </a>
            )
       })}
    </div>
  )
}

export default SocialContact