import React from 'react'
import styled from 'styled-components'
import Spline from '@splinetool/react-spline'

function Resume() {
  return (
    <Container id='Resume' className='Gradient'>
      
      <Spline scene="https://draft.spline.design/DNI4V44ENwrl8fhc/scene.splinecode" />
    </Container>
  )
}

export default Resume

const Container=styled.div`
background-image: linear-gradient(to bottom, rgba(45, 30, 71, 1), rgba(45, 30, 71, 1), rgba(45, 30, 71, 0.95), rgba(45, 30, 71, 0));
height: 100vh;
overflow-x: hidden;
overflow-y: hidden;
position: relative;


&:before{
  background: url("/images/Doodle.jpg") center center / cover no-repeat fixed;
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
 }

 &:after{
  content: "";
  height: 150px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(to bottom,  rgb(38, 38, 38, 0),rgb(38, 38, 38, 0), rgb(38, 38, 38, 1));

 }
`

