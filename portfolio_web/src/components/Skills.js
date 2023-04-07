import React from 'react'
import styled from 'styled-components'
import Spline from '@splinetool/react-spline'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SkillSlider(){
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true
  }
  return (
    <Container>
      
      <CarComponent>
      <h1 className="Header" >
        Skills
      </h1>
      <Carousel{...settings}>
        <Wrap>
          <img src='./images/Macbook Pro - Copy@10-214x189.png'/>
        </Wrap>

        <Wrap>
        <img src='./images/Component Keyboard - Copy@10-214x189.png'/>
        </Wrap>
        
        <Wrap>
        <img src='./images/Untitled@8-214x189.png'/>
        </Wrap>
        
        <Wrap>
          Bla Bla
        </Wrap>
        
        <Wrap>
          Bla Bla
        </Wrap>

        <Wrap>
          Bla Bla
        </Wrap>

        <Wrap>
          Bla Bla
        </Wrap>
        
        <Wrap>
          Bla Bla
        </Wrap>
        
        </Carousel>
      </CarComponent>
        
        
    </Container>
  )
}

export default SkillSlider

const Container=styled.div`
background: rgb(24, 27, 26);
height: 100vh;
overflow-x: hidden;


`
const CarComponent=styled.div`
height: 380px;
width: 60%;
margin: auto;
overflow-x: hidden;
background-image: linear-gradient(45deg, rgba(44, 115, 210, 0.8), rgba(124, 94, 221, 0.8), rgba(222, 34, 94, 0.8));
border-radius: 30px;
backdrop-filter: blur(8px);
padding: 4px;
align-item:center;
z-index: -1;
.Header{
  color: rgb(256, 256, 256);
  margin-left: 45%; 
}
`
const Carousel=styled(Slider)`
margin-top: 20x;
margin-right: 5px; 

ul li button{
    &:before{
        font-size:10px;
        color: rgb(150, 158, 171);
    }
}
li.slick-active button::before{
  transition: 400ms;
  margin-top: 5px;
    color: white;
}
.slick-list{
    overflow: hidden;
}
button{
    z-index: -1;
}
`
const Wrap=styled.div`
    border: 4px solid transparent;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    //box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    transition: 300ms;

img{
  height: 250px;
  
}
    &:hover{
        border: 4px solid rgb(249, 249, 249, 0.8);
    }
  `

