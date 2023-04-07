import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Spline from '@splinetool/react-spline'

function IntroPage() {
  return (
    <Wrapper>
      <Container>
            
            <Intro>
              <h2>Hi,<br/> I am Vinayak Puitandy.</h2>
            </Intro>
            <Header/>
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
  background-image: linear-gradient(to bottom, rgba(24, 27, 26, 0), rgba(24, 27, 26, 0.2),rgba(24, 27, 26, 0.4), rgba(24, 27, 26, 0.95));
 }
 &:after{
  content: "";
  height: 150px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(to bottom, rgba(24, 27, 26, 0), rgba(24, 27, 26, 0.2), rgba(24, 27, 26, 1));
 }
`
const Intro=styled.div`
margin: 0% 0% 0% 0%;
padding: 18% 7%;
align-items: center;
background: rgb(25, 167, 206, 0.4);
backdrop-filter: blur(8px);
font-size: 40px;
letter-spacing: 3.55px;
color: rgb(236, 242, 255);
font-family: 'Do Hyeon', sans-serif;
box-shadow: 8px 2px 10px 0px rgb(0, 0, 0, 0.15);
text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);

` 
const Gradient=styled.div`
z-index: 1;
margin-top: 70%;
background-image: linear-gradient(to bottom, rgba(160, 169, 255, 0), rgb(24, 27, 26)) ;
background-size: 30%;

`



