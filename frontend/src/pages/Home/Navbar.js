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
            <NavLink to="/home">Home</NavLink> 
            <NavLink to="/FavoritesPage">Favorites</NavLink> 
            <NavLink to="/signup">Sign Up</NavLink>
          </NavMenu> 
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>   
        </Nav>
        </>
      );
    };
 export default Navbar