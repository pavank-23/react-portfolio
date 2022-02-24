import React,{ useState } from 'react'
import "./web.css"

function WebMenu() {
  const [hover, setHover] = useState("#ffffff");
  return (
    <div className='web'>
        <div className='web-option' onMouseEnter={()=> setHover("#682ae9")}>
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