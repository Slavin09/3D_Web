import React from 'react'
import styled from 'styled-components'

function Header(){
    return(
        <Nav>
            <UserImg src="/images/UserImg.jpg" alt='User Image'/>
            <Style>
                 <a>
                    <span>vincodes09</span>
                 </a>
            </Style>
            <NavMenu>
            <a>
                <span>HOME</span>

            </a>
            <a>
                <span>SKILLS</span>

            </a>
            <a>
                <span>RESUME</span>

            </a>
            <a>
                <span>PROJECTS</span>

            </a>
            <a>
                <span>EXTRA</span>

            </a>
            <a>
                <span>CONTACT</span>

            </a>
            </NavMenu>
            <Download>
                <a>
                    <span>Download Resume</span>
                </a>
            </Download>
        </Nav>
    )
}

export default Header

const Nav=styled.nav`
height:70px;
width: 60%;
background:rgb(120, 80, 178, 0.3);
backdrop-filter: blur(20px);
position: fixed;
border-radius: 20px;
margin: 1% 20% 0% ;
display: flex;
align-items: center;
padding: 0 36px;
overflow-x: hidden;
z-index: 2;
`
const Style=styled.div`
font-family: 'Do Hyeon', sans-serif;
padding-left: 10px; 
font-size: 160%;
letter-spacing: 1px;
color: rgba(250, 252, 252, 0.8);

`
const NavMenu=styled.div`
display: flex;
margin: auto;
a{
    display: flex;
    align-items: center;
    padding: 0 10px;
    cursor: poiner;
    span {
        font-size: 110%;
        letter-spacing: 1.30px;
        color: rgba(256, 256, 256, 0.7);
        transition: 150ms;
        font-family: 'Do Hyeon', sans-serif;
        position: relative;

    &:hover{
        color: rgba(256, 256, 256);
    }

        &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: -1px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.45, 0.75, 0.70) 0s;
            transform: scaleX(0)
        }
    }

    &:hover {
        span:after{
            transform: scaleX(1);
            opacity: 1;
             
        }
    }
}
`
const Download=styled.div`
display: flex;
a{

    cursor: poitner;
    span {
        font-size: 155%;
        letter-spacing: 1.30px;
        color: rgba(256, 256, 256, 0.7);
        transition: 150ms;
        font-family: 'Do Hyeon', sans-serif;
        position: relative;

    &:hover{
        color: rgba(256, 256, 256);
    }

        &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0px;
            right: 0px;
            bottom: -1px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.45, 0.75, 0.70) 0s;
            transform: scaleX(0)
        }
    }

    &:hover {
        span:after{
            transform: scaleX(1);
            opacity: 1;
             
        }
    }
}
`
const UserImg=styled.img`
height: 48px;
border-radius: 50px;
`
//rgb(238, 165, 246)