import React from "react";
import { Link } from "react-router-dom"

const Header = () => {

// add avatar, dark/light toggle, Settings, and Calendar?--sb


    return (
        <nav>
        <ol> 
        <Link to="/" type="button" style={{marginRight: 10}}>Create an Account</Link>
        <Link to ="/login" type="button" style={{ marginRight: 10 }}> Log In</Link>
        <Link to="/List" type="button" style={{ marginRight: 10 }}>List</Link> 
        <Link to="/favorites" type="button" style={{ marginRight: 10 }}>Favorites</Link> 
        </ol>           
      </nav>
    );
  };
  
  export default Header;