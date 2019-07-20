import React from 'react';
import styled from 'styled-components';
import { mediaMin, mediaMax } from '../../../styles/style';
import { Link } from 'react-router-dom';
import testImage from '../../../images/test.png';

const S = {};
S.ProjectItem = styled('div')`
  position: relative;
  margin: 2px;
  flex: 0 0;
  flex-basis: calc(25% - 4px);
  background-color: grey;

  :before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  ${mediaMin.medium`
    flex-basis: calc(20% - 4px);
  `};
`;
S.ProjImg = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
`;
S.MaskBox = styled('div')`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  text-align: center;
  opacity: 0;
  color: white;
  &:hover {
    opacity: 1;
  }
`;
S.MaskContentTitle = styled('div')`
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
`;
S.MaskContentYear = styled('div')`
  font-size: 12px;
`;

const ProjectItem = React.memo(({ imgSrc, projTitle, projYear }) => {
  return (
    <S.ProjectItem>
      <S.ProjImg src={imgSrc} alt={projTitle}/>
      <Link to="/">
        <S.MaskBox>
            <S.MaskContentTitle>{projTitle}</S.MaskContentTitle>
            <S.MaskContentYear>{projYear}</S.MaskContentYear>
        </S.MaskBox>
      </Link>
    </S.ProjectItem>
  );
});

export default ProjectItem;