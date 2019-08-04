import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const S = {};

S.NavItem = styled('li')`
  display: flex;
  height: 100%;
  font-size: 13px;
  font-weight: 600;
  flex: 0 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0 15px;
  text-transform:capitalize;
  & > a {
    color: #333333;
  }
  .nav-homePage:not(.scroll-ing):not(.collapse-ing) & > a{
    color: white;
  }
  & > a:hover, & > a.active {
    color: ${props => props.theme.mainHover};
  } 
`;

const NavItem = ({ navItemName }) => {
  return (
    <S.NavItem>
      <NavLink activeClassName="active" to={`/${navItemName}`}>{navItemName}</NavLink>
    </S.NavItem>
  );
}

export default NavItem;