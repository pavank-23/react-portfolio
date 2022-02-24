import React, { useState } from 'react'
import "./header.css"
import MobileMenu from './mobile'
import WebMenu from './web'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='header'>
        <div className='logo'>Portfolio</div>
        <div className='menu'>
            <div className='web-menu'>
                <WebMenu />
            </div>
            <div className='mobile-menu'>
                <div onClick={()=>setIsOpen(!isOpen)}>
                    <i class="fi fi-rr-align-justify menu-icon"></i>
                </div>
                {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
        </div>
    </div>
  )
}

export default Header;