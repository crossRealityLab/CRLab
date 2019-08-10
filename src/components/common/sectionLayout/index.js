import React from 'react';
import styled from 'styled-components';
import { mediaMin, mediaMax } from '../../../styles/style';

const S = {};
S.SectionLayout = styled('div')`
  max-width: 1020px;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;

  ${mediaMax.mediumMax`
    padding: 0 15px;
  `};
  ${mediaMin.medium`
    width: 750px;
    margin: 0 auto;
  `};
  ${mediaMin.largeMax`
    width: 970px;
  `};
  ${mediaMin.xlargeMax`
    width: 1170px;
  `};
`;
S.SectionTitle = styled('h3')`
  font-size: 17px;
`;

const SectionLayout = ({ sectionTitle, ...props }) => {

  return (
    <S.SectionLayout className={props.className} id="container">
      {!!sectionTitle 
        ? (<S.SectionTitle>{sectionTitle}</S.SectionTitle>)
        : null
      }
      {props.children}
    </S.SectionLayout>
  );
}

export default SectionLayout;