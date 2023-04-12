import React from 'react'
import Home from './Home'
import Skills from './Skills'
import Resume from './Resume'
import Projects from './Projects'


function Parent() {
  return (
    <div data-scroll-section>
      
        <Home/>
      <Skills/>
      <Resume/>
      <Projects/>
    </div>
  )
}

export default Parent