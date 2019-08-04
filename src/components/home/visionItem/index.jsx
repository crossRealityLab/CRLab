import React, { useCallback }from 'react';
import styled from 'styled-components';
import { mediaMin, mediaMax } from '../../../styles/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const S = {};
S.VisionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  flex: 1;
  &:nth-child(n+2) {
    border-left: 1px solid #aaa;
  }
  ${mediaMax.medium`
    flex-direction: row;
    & > svg {
      margin-right: 20px;
    }
    &:nth-child(n+2) {
      border-top: 1px solid #aaa;
      border-left: 0;
    }
  `};
`;
const VisionBox = ({ visionDescription }) => {
  return (
    <S.VisionBox>
      <FontAwesomeIcon icon={faBookmark} width={100} size="2x"/>
      <p>{visionDescription}</p>
    </S.VisionBox>
  );
}
export default VisionBox;
