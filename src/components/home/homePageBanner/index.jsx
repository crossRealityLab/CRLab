import React, { useCallback }from 'react';
import styled from 'styled-components';
import { mediaMin, mediaMax } from '../../../styles/style';
import testImage from '../../../images/test.png';

const S = {};
S.HomePageBanner = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-image: url(${testImage});
  background-size: cover;
  background-position: center;
`;
S.Title = styled.h1`
  font-size: 40px;
  color: white;
  margin: 0;
  text-transform: capitalize;
  ${mediaMax.mediumMax`
    font-size: 30px;
  `};
`;
S.SubTitle = styled.h3`
  margin: 48px 0 10px 0;
  font-size: 17px;
  line-height: 24px;
  color: white;
  text-align: center;
  &:first-letter{
    text-transform: uppercase;
  }
  ${mediaMax.mediumMax`
    font-size: 16px;
    margin: 48px 20px 10px 20px;
  `};
`;
const HomePageBanner = ({title, subTitle}) => {
  return (
    <S.HomePageBanner>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subTitle}</S.SubTitle>
    </S.HomePageBanner>
  );
}

export default HomePageBanner;