import React from 'react';
import styled from 'styled-components';
import { mediaMin, mediaMax } from '../../../styles/style';
import { Link } from 'react-router-dom';
import useComponentVisible from '../../common/useComponentVisible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown, faFilePdf, faLink, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

const S = {};
S.PublicationItem = styled('div')`
  &:nth-child(n+2){
    margin-top: 15px;
  };
  width: 100%;
  min-height: 150px;
  height: auto;
  display: flex;
`;
S.ImgHoverBg = styled('div')`
  position: absolute;
  top: 0;
  width: 100%;
  color: white;
  font-weight: bold;
  padding: 10px;
  padding-top: 10%;
  text-align: center;
  font-size: 16px;
  ${mediaMax.smallMax`
    font-size: 12px;
  `};
`;
S.PublicationImgWrapper = styled('div')`
  position: relative;
  flex: 0.2;
  min-width: 20%;
  max-height: fit-content;
  & > img {
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
    flex: 0.4;
  `};
`;
S.ContentWrapper = styled('div')`
  flex: 1;
  height: 100%;
  overflow: hidden;
  margin: 0 30px;
  & > a:first-child {
    font-size: 16px;
    :hover {
      color: ${props => props.theme.mainHover};
    }
  }
  ${mediaMax.mediumMax`
    margin: 0 20px;
  `};
  ${mediaMax.smallMax`
    margin: 0 10px;
  `};
`;
S.Authors = styled('div')`
  margin-top: 5px;
  font-size: 14px;
`;
S.Abstract = styled('div')`
  cursor: pointer;
  height: 20px;
  margin-top: 15px; 
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & svg {
    margin-right: 5px;
  }
  &.publication__abstract--open {
    height: auto;
    white-space: unset;
    svg {
      transform: rotate(-180deg);
    }
  }
`;
S.IconLinkList = styled('div')`
  display: flex;
  padding-top: 15px;
  & > svg:nth-child(n+2) {
    margin-left: 5px;
  }
  & > a {
    margin: 0 5px;
    color: ${props => props.theme.tagColor};
  }
  & > a:hover{
    color: ${props => props.theme.mainHover};
  }
  font-size: 12px;
`;

const PublicationItem = React.memo(({ imgSrc, pdfSrc, doiSrc, projTitle, authors, abstract, acceptedYear, publication, uuid }) => {
  const { ref, isComponentVisible, toggleVisible } = useComponentVisible(false);
  return (
    <S.PublicationItem>
      <S.PublicationImgWrapper>
        <img src={imgSrc} alt="" />
        <S.ImgHoverBg>
          {`${publication} ${acceptedYear}`}
        </S.ImgHoverBg>
      </S.PublicationImgWrapper>
      <S.ContentWrapper>
        <Link to={`/projects/${uuid}`}>{projTitle}</Link>
        <S.Authors>{authors}</S.Authors>
        <S.Abstract ref={ref} className={isComponentVisible ? 'publication__abstract--open' : 'publication__abstract'} onClick={toggleVisible}>
          <FontAwesomeIcon icon={faChevronCircleDown} />
          {`Abstract: ${abstract}`}
        </S.Abstract>
        <S.IconLinkList>
          <FontAwesomeIcon icon={faFilePdf} />
          <a href={pdfSrc}>PDF</a>|
          <FontAwesomeIcon icon={faLink} />
          <a href={doiSrc}>DOI</a>|
          <FontAwesomeIcon icon={faExternalLinkAlt} />
          <Link to="/">Detail</Link>
        </S.IconLinkList>
      </S.ContentWrapper>
    </S.PublicationItem>
  );
});

export default PublicationItem;