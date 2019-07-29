import React, { useMemo, useEffect }from 'react';
import styled from 'styled-components';
import { mediaMin, mediaMax } from '../../../styles/style';
import { Link } from 'react-router-dom';

const S = {};
S.Person = styled('div')`
  width: 50%;
  display: flex;
  padding: 12px;
  ${mediaMax.mediumMax`
    width: 100%;
  `};
`;
S.PersonImgWrapper = styled('div')`
  position: relative;
  flex: 0.5;
  max-height: fit-content;
  margin-right: 30px;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
  }
  &:before {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  ${mediaMax.mediumMax`
    flex: 0.35;
    margin-right: 15%;
  `};
  &:hover > a > div{
    opacity: 0.3;
  }
`;
S.PersonImgHover = styled('div')`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0,0,0);
  opacity: 0;
  z-index: 999999;
`;
S.ContentWrapper = styled('div')`
  flex: 0.5;
  & > div:nth-child(n+3) {
    margin-top: 15px;
  }
  ${mediaMax.mediumMax`
    flex: 0.65;
  `};
`;
S.Name = styled('div')`
  font-weight: bold;
  font-size: 16px;
  &:hover a{
    color: ${props => props.theme.mainHover};
  }
`;
S.Website = styled('div')`
  font-style: italic;
  & > a {
    color: ${props => props.theme.contentColor}
  } 
  &:hover a{
    color: #000;
  }
`;

const Person = React.memo(({ imgSrc, name, title, focusTopic, email, website, ...props}) => {
  const personRoutLink = useMemo(() => {
    return `${props.match.url}/${name.replace(/\s/g,'-')}`;
  },[name, props.match]);

  return (
    <S.Person>
      <S.PersonImgWrapper>
        <img src={imgSrc} alt='name' />
        <Link to={personRoutLink}>
          <S.PersonImgHover />
        </Link>
      </S.PersonImgWrapper>
      <S.ContentWrapper>
        <S.Name>
          <Link to={personRoutLink}>{name}</Link>
        </S.Name>
        <div>{title}</div>
        <div>{focusTopic}</div>
        <div>{email}</div>
        <S.Website>
          <a href={website}>Personal website</a>
        </S.Website>
      </S.ContentWrapper>
    </S.Person>
  );
});

export default Person;