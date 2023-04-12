import React from 'react'
import styled from 'styled-components'
import Spline from '@splinetool/react-spline'

function IntroPage() {
  return (
    <Wrapper >
      <Container >
            
            <Intro >
              <h2 data-scroll data-scroll-speed="2">Hi,<br/> I am Vinayak Puitandy.</h2>
              <p data-scroll data-scroll-speed="2" id='Skills' className='About'>CSE Undergrad with a never ending love for Problem Solving and a burning passion for development. I am also a budding musician :) I love talking to new people and discuss about new ideas and projects. I have recently started with DevOps and loving it since.</p>
            </Intro>
            <Spline className="spline" scene="https://draft.spline.design/c2vSp3mgf-e6b1xe/scene.splinecode" />
            
    </Container>
    </Wrapper>
    
  )
}

export default IntroPage
const Wrapper=styled.div`

`

const Container=styled.div`
height: 100vh;
position: relative;
overflow-x: hidden;
 display: flex;
 
 .spline{
  content: "";
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  position: absolute;
 }
 &:before{
  content: "";
  height: 150px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(to bottom, rgb(45, 30, 71, 0), rgb(45, 30, 71, 0.3), rgb(45, 30, 71, 0.95));
 }
 &:after{
  content: "";
  height: 150px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(to bottom, rgb(45, 30, 71, 0), rgb(45, 30, 71, 0.3), rgb(45, 30, 71, 1));
 }
`
const Intro=styled.div`
margin: 0% 50% 0% 0%;
padding: 15% 7%;
align-items: center;
background: rgb(25, 167, 206, 0.4);
backdrop-filter: blur(8px);
font-size: 40px;
letter-spacing: 3.55px;
color: rgb(236, 242, 255);
font-family: 'Do Hyeon', sans-serif;
box-shadow: 8px 2px 10px 0px rgb(0, 0, 0, 0.15);
text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);

.About{
  font-size: 26px;
}
` 



