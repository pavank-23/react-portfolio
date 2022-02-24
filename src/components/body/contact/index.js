import React from 'react'
import Separator from '../../../common/separator'
import SocialContact from '../../../common/social-contact'

function Contact() {
  return (
    <div className='contact'>
      <Separator />
      <label className='section-title'>.contact()</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Hit me up in any of the following platforms to get in touch</p>
          <SocialContact />
        </div>
      </div>
    </div>
  )
}

export default Contact