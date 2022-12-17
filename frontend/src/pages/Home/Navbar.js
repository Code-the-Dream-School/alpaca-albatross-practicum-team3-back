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
import { authAtom } from './../../state/atom-auth';
import { useSetRecoilState } from 'recoil';

const Navbar = () => {
  const navigate = useNavigate();

  const setAuth = useSetRecoilState(authAtom);

  const submitLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setAuth(null);
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
        <NavBtnLink className='logoutbtn' onClick={submitLogOut}>
          Log Out
        </NavBtnLink>
      </NavBtn>
    </>
  );
};
export default Navbar;
