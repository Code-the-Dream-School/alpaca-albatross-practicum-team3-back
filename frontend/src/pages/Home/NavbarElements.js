import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
height: 75px;
display: flex;
// justify-content: center;
flex-direction:row;
padding: 3px calc((100vw - 1000px) / 2);
z-index: -1;
border: 1px solid rgba(255, 255, 255, .25);
border-radius: 10px;
background-color: rgba(255, 255, 255, 0.45);
box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(5px);
`

export const NavLink = styled(Link)`
// color: #fff;
margin-bottom: -25px;
font-size: 24px;
display: flex;
// align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 60%;
cursor: pointer;
border: solid black 1px;
border-radius: 5px;

&:hover {
color: #8799f3;
}
`

export const Bars = styled(FaBars)`
display: none;
color: #fff;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

@media screen and (max-width: 768px) {
    display: none;
}
`
export const NavBtn = styled.nav`
display: flex;
// align-items: center;
// margin-right: 24px;
float:right;
margin-top:-50px;


@media screen and (max-width: 768px) {
    display: none;
}
`
// to be styled when all tabs are set
export const NavBtnLink = styled(Link)`
border-radius: 4px;
font-size: 15px;
// background: #c8bbf4;
padding: 10px 22px;
color: #222831;
border: solid black 1px;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
z-index:1;



&:hover {
transition: all 0.2s ease-in-out;
background: #fff;
color: #010606;
border: solid 4px;
border-color: #8799f3;
}
`

