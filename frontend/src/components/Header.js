import React from "react";
import { Link } from "react-router-dom"

const Header = () => {

// add avatar, dark/light toggle, Settings, and Calendar?--sb


    return (
        <nav className='nav-bar'>
        <ol>  
        <Link className='home_link' to="/" type="button" style={{ marginRight: 10 }}>Home</Link> 
        <Link className='favorite_link' to="/favorites" type="button" style={{ marginRight: 10 }}>Favorites</Link> 
        </ol>           
      </nav>
    );
  };
  
  export default Header;