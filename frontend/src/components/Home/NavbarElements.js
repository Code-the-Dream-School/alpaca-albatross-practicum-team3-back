import styled from 'styled-components';
import { NavLink as Link } from "react-router-dom";
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
background: #125de0;
height: 80px;
display: flex;
justify-content: space-between;
padding: 3px calc((100vw - 1000px) / 2);
z-index: 10;
`

export const NavLink = styled(Link)`
color: #fff;
font-size: 20px;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&:hover {
     color: #f4fc0a;
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
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(Link)`
border-radius: 4px;
font-size: 15px;
background: #f4fc0a;
padding: 10px 22px;
color: #0f0f0f;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
transition: all 0.2s ease-in-out;
background: #fff;
color: #010606;
border: solid 4px;
border-color: #f4fc0a;
}
`