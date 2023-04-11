import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';


function Projects() {

    const { ref, inView } = useInView({
        threshold: 0.4,
      });

  return (
    <Container id='Code'>
        <CodeS>
            <Info>
                <h3>Coding Skills</h3>
            </Info>
        </CodeS>
        <Github inView={inView} ref={ref} className={inView ? '': 'Reveal'}>
            <Text>
                <h4>Open my Github</h4>
            </Text>
            <img src='https://soumyajit-portfolio-website.web.app/img/github.gif'/>
            <Text>
                <h4>Glance at the wonders</h4>
            </Text>
        </Github>

    </Container>
    
  )
}

export default Projects
const Container=styled.div`
height: 100vh;
background-image: linear-gradient(to bottom, rgb(38, 38, 38, 1), rgba(0, 0, 0, 1));
display: flex;
position: absolute;
top: 300;
right: 0;
left: 0;
right: 0;
`
const CodeS=styled.div`
position: relative; 
height: 350px;
background-color: rgb(147, 142, 232);
border-radius: 90px 0 0 90px;
top: 132px;
left: 40px;
width: 55%;
transition: 0.6s;

&:hover{
    transform: scale(96%);
    width: 70%;
}
`
const Info=styled.div`
`
const Github=styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
height: 400px;
width: 50%;
max-width: 95%;
background-color: rgb(229, 224, 236);
border-radius: 90px;
position: relative;
top: 97px;
right: 2%;
transition: 0.6s;
font-family: 'Do Hyeon', sans-serif;
max-font-size: 160%;
font-size: 115%;

img{
    height: 80%;
margin-left: 10%;
margin-right: 7%;
}

&:hover{
    transform: scale(96%);
    width: 80%;
    font-size: 160%;
}

`
const Text=styled.div`

`
