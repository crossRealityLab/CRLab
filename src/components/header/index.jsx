import React, { useState, useEffect, useCallback, useMemo }from 'react';
import styled from 'styled-components';
import { NavLink, withRouter } from 'react-router-dom';
import NavItem from './navItem';
import CollapseButton from './collapseButton';
import { mediaMax, mediaMin } from '../../styles/style';
import useComponentVisible from '../common/useComponentVisible';
import useWindowSize from '../common/useWindowSize';

const S = {};

S.Header = styled('header')`
  width: 100vw;
  display: flex;
  padding: 6px 12px;
  position: fixed;
  align-items: center;
  height: 80px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
  z-index: 999;
  background-color: white;
  &.nav-homePage:not(.scroll-ing):not(.collapse-ing) {
    background-color: rgba(0,0,0,0);
    box-shadow: none;
  }
  &.scroll-ing {
    height: 50px;
    transition: height .3s;
  }
  &.collapse-ing {
    box-shadow: none;
  }
`;

S.NavLogo = styled('div')`
  transition: font-size .2s, opacity .2s linear .2s;
  font-size: 30px;
  white-space: nowrap;
  font-weight: bold;
  z-index: 2;
  opacity: 1;
  margin-right: 4%;
  .collapse-ing > &, .nav-homePage:not(.scroll-ing):not(.collapse-ing) > &{
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }
  .scroll-ing > & {
    font-size: 24px;
  }
  ${mediaMin.largeMax`
    margin-left: calc((100vw - 970px - 24px) / 2);
  `};
  @media(min-width: 1025px) {
    margin-left: calc((100vw - 1020px - 24px) / 2);
  }
`;

S.Nav = styled('nav')`
  display: flex;
  left: 0px;
  top: 0;
  .nav-homePage:not(.scroll-ing):not(.collapse-ing) & {
    background-color: rgba(0,0,0,0);
  }
  background-color: white;
  .collapse-ing & {
    max-height: 500px;
    transition: max-height 0.4s ease-in;
    > ul {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.1s ease-in 0.3s;
    }
  }
  ${mediaMax.mediumMax`
    padding: 12px;
    transition: max-height 0.4s ease-out;
    position: absolute;
    width: 100%;
    max-height: 100%
    box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
    > ul {
      opacity: 0;
      visibility: hidden;
    }
  `};
  
  & > ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    ${mediaMin.medium`
      flex-direction: row;
      position: initial;
    `};
  }
`;

const Header = (props) => {
  const { ref, isComponentVisible, toggleVisible } = useComponentVisible(false);
  const windowSize = useWindowSize();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])
  
  useEffect(() => {
    turnOffCollapse();
  },[windowSize])

  const isHomeClassName = useMemo(() => {
    const { pathname } = props.location
    if (pathname === '/')
      return 'nav-homePage ';
    else return ''
  },[props.location.pathname]);

  const turnOffCollapse = useCallback(() => {
    if(isComponentVisible && windowSize.innerWidth <= 768)
      toggleVisible();
  },[isComponentVisible, windowSize, toggleVisible])

  const handleScroll = useCallback(() => {
    if(window.pageYOffset !== 0)
      setIsScrolling(true);
    else setIsScrolling(false);
  },[])

  const renderNavItem = () => {
    const item_array = ['projects', 'publications', 'teams', 'courses', 'contacts'];
    let navItems = item_array.map((item, index) => {
      return <NavItem key={index} navItemName={item} />
    })
    return <ul>{navItems}</ul>
  }

  return (
    <S.Header className={`${isHomeClassName}${isComponentVisible ? 'collapse-ing ' : ''}${isScrolling ? 'scroll-ing' : ''}`}>
      <S.NavLogo >
        <NavLink to="/" activeClassName="active">Cross Reality Lab</NavLink>
      </S.NavLogo>
      <S.Nav >
        {renderNavItem()}
      </S.Nav>
      <CollapseButton ref={ref} toggle={toggleVisible}/>
    </S.Header>
  );
}

export default withRouter(Header);