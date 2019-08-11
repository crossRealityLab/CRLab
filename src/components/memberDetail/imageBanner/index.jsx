import React from 'react';
import styled from 'styled-components';
import { mediaMin, mediaMax } from '../../../styles/style';

const S = {};
S.ImageBanner = styled.div`
  position: relative;
  height: 280px;
  margin-top: 15px;
  margin-bottom: 40px;
  padding-left: 100px;
  display: flex;
  
  ${mediaMax.largeMax`
    padding-left: 60px;
  `};
  ${mediaMax.mediumMax`
    height: 200px;
    padding: 0 30px;
    justify-content: space-between;
  `};
  ${mediaMax.smallMax`
    padding: 0 15px 0 0;
    height: 175px;
  `};
`;
S.BackgroundCover = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.04;
  background-color: black;
  z-index: 1;
`;
S.ImgWrapper = styled.div`
  flex: 0.55;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  ${mediaMax.largeMax`
    flex: 0.7;  
  `};
  ${mediaMax.mediumMax`
    flex: 0.7;  
  `};
  ${mediaMax.smallMax`
    flex: 0.85;  
  `};
  
`;
S.ContentWrapper = styled.div`
  margin-left: 12%;
  margin-bottom: 20px;
  align-self: flex-end;
  ${mediaMax.mediumMax`
    margin-left: 0;
  `};
`;
S.ContentName = styled.div`
  font-weight: 700;
  font-size: 18px;
`;
S.Email = styled.div`
  margin-top: 8px;
`;
S.Website = styled.div`
  font-style: italic;
  & > a {
    color: ${props => props.theme.contentColor}
  } 
  &:hover a{
    color: #000;
  }
`;
const ImageBanner = ({ imgSrc, name, title, focusOn, email, website }) => {
  return (
    <S.ImageBanner>
      <S.BackgroundCover />
      <S.ImgWrapper>
        <img src={imgSrc} alt={name} />
      </S.ImgWrapper>
      <S.ContentWrapper>
        <S.ContentName>{name}</S.ContentName>
        <div>{title}</div>
        <div>{focusOn}</div>
        <S.Email>{email}</S.Email>
        {website && 
          <S.Website>
            <a href={website} target="_blank" rel="noopener noreferrer">Personal website</a>
          </S.Website>
        }
      </S.ContentWrapper>
    </S.ImageBanner>
    
  );
}

export default ImageBanner;