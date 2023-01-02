import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>DELIQUILLA</NavLink>
        <NavIcon onClick={toggle}>
          <p>Direccion</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
