import React from 'react'
import "./body.css"
import Contact from './contact'
import Projects from './projects'
import About from './about'
import Personal from '../personal'
import Skills from './skills'

function Body() {
  return (
    <div className='Body'>
      <section id='about'>
        <About />
      </section>
      <section id='projects'>
        <Projects />
      </section>
      <section id='personal'>
        <Personal />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='contact'>
        <Contact />
      </section>
    </div>
  )
}

export default Body