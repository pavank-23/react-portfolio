import React from 'react'
import "./web.css"

function WebMenu() {
  return (
    <div className='web'>
        <div className='web-option'>
            <a href='#projects'>
            <i class="fi fi-rr-laptop option-icon"></i> Projects
            </a>
        </div>
        <div className='web-option'>
            <a href='#contact'>
            <i class="fi fi-rr-envelope option-icon"></i>Contact
            </a>
        </div>
    </div>
  )
}

export default WebMenu