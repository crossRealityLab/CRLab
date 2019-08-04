import React, { useMemo } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarMinus } from '@fortawesome/free-regular-svg-icons';

const S = {};
S.NewsBox = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);;
  min-height: 100px;
  margin: 12px;
  padding-bottom: 10px;
`;
S.ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  & > div:first-child {
    font-weight: 600;
  }
  & > div:nth-child(n):not(:last-child) {
    margin-bottom: 10px;
  }
  & > div:nth-child(n+2) {
    color: ${props => props.theme.tagColor};
  }
  & svg {
    margin-right: 5px;
  }
`;
S.Date = styled.div`
  margin-top: auto;
`;

const NewsBox = React.memo(({ imgSrc, title, date, description }) => {
  const parsedDate = useMemo(() => {
    return date.split('/').reverse().join('/')
  },[date])
  return (
    <S.NewsBox>
      <S.ContentWrapper>
        <div>{title}</div>
        <div>{description}</div>
        <S.Date>
          <FontAwesomeIcon icon={faCalendarMinus} />
          {parsedDate}
        </S.Date>
      </S.ContentWrapper>
    </S.NewsBox>
  );
});

export default NewsBox;