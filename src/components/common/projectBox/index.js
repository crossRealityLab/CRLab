import React from 'react';
import styled from 'styled-components';
import { mediaMin } from '../../../styles/style';
import { Link } from 'react-router-dom';

const S = {};
S.ProjectBox = styled('div')`
  position: relative;
  margin: 2px;
  flex: 0 0;
  flex-basis: calc(33.3% - 4px);
  background-color: grey;

  :before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  ${mediaMin.small`
    flex-basis: calc(25% - 4px);
  `};
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
  font-size: 14px;
  font-weight: bold;
  text-transform: capitalize;
  ${mediaMin.medium`
     font-size: 16px;
  `};
`;
S.MaskContentYear = styled('div')`
  font-size: 12px;
`;

const ProjectBox = React.memo(({ imgSrc, projTitle, projYear, uuid }) => {
  return (
    <S.ProjectBox>
      <S.ProjImg src={imgSrc} alt={projTitle}/>
      <Link to={`/projects/${uuid}`}>
        <S.MaskBox>
            <S.MaskContentTitle>{projTitle}</S.MaskContentTitle>
            <S.MaskContentYear>{projYear}</S.MaskContentYear>
        </S.MaskBox>
      </Link>
    </S.ProjectBox>
  );
});

export default ProjectBox;