import React from 'react';
import styled from 'styled-components';
import { mediaMin, mediaMax } from '../../styles/style';
import SectionLayout from '../../components/common/sectionLayout'
const S = {};

S.Footer = styled('footer')`
  font-size: 10pt;
  min-height: 70px;
  padding: 20px 0px 10px 0px;
  
`;
S.LinkWrapper = styled(SectionLayout)`
  display:flex;
  flex-wrap: wrap;
  color: grey;
  position: relative;
  &:after {
    content: '';
    width: calc(100% - 30px);;
    position: absolute;
    height: 1px;
    background-color: rgb(211, 211, 211);
  }
`;
S.itemSiteLink = styled('a')`
  color: grey;
  &:hover {
    color: ${props => props.theme.mainHover};
  }
`;
const Footer = () => {
  return (
    <S.Footer>
      <S.LinkWrapper>
        © Morphing Matter Lab,&nbsp;
        <S.itemSiteLink href="https://www.cs.nctu.edu.tw/intro/organization/multimedia" target="_blank">Institute of Multimedia Engineering</S.itemSiteLink>,&nbsp;
        <S.itemSiteLink href="https://www.cs.nctu.edu.tw/" target="_blank">School of Computer Science</S.itemSiteLink>,&nbsp;
        <S.itemSiteLink href="https://www.nctu.edu.tw/" target="_blank">National Chiao Tung University</S.itemSiteLink>,&nbsp;
      </S.LinkWrapper>
    </S.Footer>
  );
}

export default Footer;