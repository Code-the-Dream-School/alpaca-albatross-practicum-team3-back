import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  
  const submitLogOut = (e) => {
    e.preventDefault()
    localStorage.setItem("user", '')
    localStorage.setItem("token", '')
    navigate('/')
  }

    return (
        <>
          <Nav> 
          <NavLink to='/logo'>
            <h1 className="logo">LifeStyle App</h1>
            </NavLink> 
            <Bars />
            <NavMenu>
            <NavLink to="/home" className='home'>Home</NavLink> 
            <NavLink to="/FavoritesPage" className='favoriteslink'>Favorites</NavLink> 
            <NavLink to="/register" className='register'>Register</NavLink>
          </NavMenu> 
          <NavBtn>
            <NavBtnLink to="/">Log In</NavBtnLink>
          </NavBtn>   
          <NavBtn>
            <NavBtnLink onClick={submitLogOut}>Log Out</NavBtnLink>
          </NavBtn>   
        </Nav>
        </>
      );
    };
 export default Navbar