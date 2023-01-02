import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='../Products'>Carrera 80aa #20b-17, Medellin, Antioquia, Colombia</SidebarLink>
        <SidebarLink to='/'>Domicilios</SidebarLink>
        <SidebarLink to='/'>312 7059864</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
