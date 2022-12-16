import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const submitLogOut = (e) => {
    e.preventDefault();
    localStorage.setItem('user', '');
    localStorage.setItem('token', '');
    navigate('/');
  };

  return (
    <>
      <Nav>

        {/* should route to home or be inactive */}
        {/* <NavLink to='/logo'> logo
        </NavLink> */}
        <Bars />
        <NavMenu>
          <NavLink to='/home' className='home'>
            Home
          </NavLink>
          <NavLink to='/FavoritesPage' className='favorites'>
            Favorites
          </NavLink>
          <NavLink to='/weekly' className='weekly'>
            Weekly
          </NavLink>
          <NavLink to='/monthly' className='monthly'>
            Monthly
          </NavLink>
        </NavMenu>
      </Nav>
      <NavBtn>
        <NavBtnLink className="logoutbtn" onClick={submitLogOut}>Log Out</NavBtnLink>
      </NavBtn>
    </>
  );
};
export default Navbar;
