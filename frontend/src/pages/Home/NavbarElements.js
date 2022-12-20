import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  height: 75px;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content:center;
  z-index: -1;
  // border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  // @media screen and (max-width: 788px) {
    // width:fit-content;
    // position:fixed;
  // }
  }
`;


export const NavLink = styled(Link)`
  font-size: 24px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 5px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(1px);
  width:25%;

  &:hover {
    box-shadow:0 0 10px 3px #fffff0;
  }

  @media screen and (max-width: 900px) {
    min-width:fit-content;
  }
`;


// set tabs to footer in @media
export const NavMenu = styled.div`
  display: flex;
  width:40%;
  }
@media screen and (max-width: 786px) {
    width:100%;
  }
`;

export const NavBtn = styled.nav`
  float: right;
  margin-top: -55px;
  
`;


export const NavBtnLink = styled(Link)`
  font-size: 24px;
  margin-right: 10px;
  margin-bottom: 5px;
  border: 1px solid rgba(255, 255, 255, .25);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.45);
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  padding:5px;
  z-index: 1;

  &:hover {
    box-shadow:0 0 10px 5px #fffff0;

`;
