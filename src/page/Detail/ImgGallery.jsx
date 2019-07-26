import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

import { mediaMax } from '../../styles/style';

const ImgWithCaption = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin: 10px 0;

  ${mediaMax.mediumMax`
    min-height: unset;
  `};
`;

const ImgWrapper = styled.div`
  position: relative;
  height: 450px;

  ${mediaMax.mediumMax`
    width: 100%;
    height: unset;
  `};
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  display: none;
  border-right: 4px solid #424242;
  border-bottom: 4px solid #424242;
  width: 20px;
  height: 20px;
  cursor: pointer;

  ${mediaMax.mediumMax`
    display: inline-block;
  `};
`;

const ArrowL = styled(Arrow)`
  left: 2%;
  transform: translateY(-50%) rotate(-225deg);
`;

const ArrowR = styled(Arrow)`
  right: 2%;
  transform: translateY(-50%) rotate(-45deg);
`;

const MainImg = styled.img`
  height: 100%;

  ${mediaMax.mediumMax`
    width: 100%;
    height: unset;
  `};
`;

const Caption = styled.div`
  position: relative;
  flex-grow: 1;
  align-self: stretch;
  background-color: rgba(0, 0, 0, 0.04);

  > p {
    position: absolute;
    bottom: 30px;
    left: 25px;
  }

  ${mediaMax.mediumMax`
    display: none;
  `};
`;

const ImgList = styled.div`
  width: 100%;
  height: 72px;

  ${mediaMax.mediumMax`
    display: none;
  `};
`;

const SubImg = styled.img`
  display: inline-block;
  height: 100%;
  margin-left: 2px;
  border: ${props => (props.isActive ? '3px solid' : '')};
  cursor: pointer;
`;

export default ({ imgs }) => {
  const [mainImgIdx, setMainImgIdx] = useState(0);
  const isReachImgListBoundary =
    mainImgIdx === 0 || mainImgIdx === imgs.length - 1;

  const handleMoveLeft = useCallback(() => {
    if (!isReachImgListBoundary) {
      setMainImgIdx(i => i - 1);
    }
  }, [setMainImgIdx]);

  const handleMoveRight = useCallback(() => {
    if (!isReachImgListBoundary) {
      setMainImgIdx(i => i + 1);
    }
  }, [setMainImgIdx]);

  return (
    <>
      <ImgWithCaption>
        <ImgWrapper>
          <ArrowL onClick={handleMoveLeft} />
          <MainImg src={imgs[mainImgIdx].url} />
          <ArrowR onClick={handleMoveRight} />
        </ImgWrapper>
        <Caption>
          <p>{imgs[mainImgIdx].caption}</p>
        </Caption>
      </ImgWithCaption>
      <ImgList>
        {imgs.map((img, idx) => (
          <SubImg
            key={idx}
            onClick={() => setMainImgIdx(idx)}
            src={img.url}
            isActive={idx === mainImgIdx}
          />
        ))}
      </ImgList>
    </>
  );
};
