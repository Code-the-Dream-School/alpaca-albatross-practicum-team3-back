import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
background: #eee8c1;
height: 75px;
display: flex;
justify-content: center;
flex-direction:row;
padding: 3px calc((100vw - 1000px) / 2);
z-index: 10;
`

export const NavLink = styled(Link)`
color: #fff;
margin-bottom: -25px;
font-size: 24px;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 60%;
cursor: pointer;

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

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(Link)`
border-radius: 4px;
font-size: 15px;
background: #c8bbf4;
padding: 10px 22px;
color: #222831;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
align-self:flex-end;
margin-left:150px;

&:hover {
transition: all 0.2s ease-in-out;
background: #fff;
color: #010606;
border: solid 4px;
border-color: #8799f3;
}
`