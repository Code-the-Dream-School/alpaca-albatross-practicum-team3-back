import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavbarElements";


const Navbar = () => {

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
        </Nav>
        </>
      );
    };
 export default Navbar