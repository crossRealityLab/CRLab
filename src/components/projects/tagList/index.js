import React from 'react';
import styled from 'styled-components';
import { mediaMin, mediaMax } from '../../../styles/style';
import { Link } from 'react-router-dom';

const S = {};
S.TagList = styled('div')`
  width: 100%;
  text-align: right;
  padding: 0 2px 10px 2px;
`;
S.Tag = styled('span')`
  color: #424242;
  text-transform: capitalize;
  position: relative;
  &:hover {
    color: black;
    cursor: pointer; 
  }
`;
S.Split = styled('span')`
  ${S.TagList} &:first-child{
    display: none;
  } 
`;
const TagList = React.memo(({ tags, handleClickTab }) => {
  const renderTagList = () => {
    return tags.map((item, index) => {
      return <React.Fragment key={index}>
                <S.Split> / </S.Split>
                <S.Tag onClick={handleClickTab(item)}>{item}</S.Tag>
              </React.Fragment>
    })
  }
  return (
    <S.TagList>
      {renderTagList()}
    </S.TagList>
  );
});

export default TagList;