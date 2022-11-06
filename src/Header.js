import React from "react";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav>
        <ol> 
        <Link to="/" type="button" style={{ marginRight: 10 }}>Home</Link> 
        <Link to="/favorites" type="button" style={{ marginRight: 10 }}>Favorites</Link> 
        </ol>           
      </nav>
    );
  };
  
  export default Header;