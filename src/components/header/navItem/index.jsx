import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const S = {};

S.NavItem = styled('li')`
  display: flex;
  height: 100%;
  color: #333333;
  font-size: 13px;
  font-weight: 600;
  flex: 0 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0 15px;
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