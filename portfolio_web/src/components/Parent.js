import React from 'react'
import Home from './Home'
import Skills from './Skills'
import Resume from './Resume'
import styled from 'styled-components'


function Parent() {
  return (
    <div>
        <Home/>
      <Skills/>
      <Resume/>
    </div>
  )
}

export default Parent

Home=styled.div`

`
Skills=styled.div`

`