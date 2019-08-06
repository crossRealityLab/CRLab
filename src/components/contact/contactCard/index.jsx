import React from 'react';
import styled from 'styled-components';
import { mediaMax } from '../../../styles/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStreetView, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const S = {};
S.Card = styled.div`
  padding: 5px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  height: 320px;
  min-width: 220px;
  border-color: #666 #cfcfcf #cfcfcf;
  border-style: solid;
  border-width: 2px 1px 1px;
  box-shadow: 4px 4px 13px #bbb;
  justify-content: space-between;
  & > div:first-child {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 10px;
    font-style: italic;
  }
  ${mediaMax.mediumMax`
    height: 250px;
  `};
`;

S.Name = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #222222;
  text-align: right;
`;
S.Email = styled.a`
  font-size: 12px;
  color: ${props => props.theme.tagColor};
  text-decoration: underline !important;
  text-align: right;
`;
S.Info = styled.div`
  text-align: left;
  margin-top: 5px;
  & > svg {
    margin-right: 5px;
  }
`;
S.Label = styled.div`
  margin-top: 15px;
  font-weight: 600;
`;

const Card = React.memo(({ name, email, office, officeHours, lab }) => {
  return (
    <S.Card>
      <div>Information</div>
      <S.Name>{name}</S.Name>
      <S.Email href={`mailto:aroe86267@gmail.com`}>{email}</S.Email>
      <div>
        <S.Label>Office loaction</S.Label>
        <S.Info><FontAwesomeIcon icon={faStreetView} />{office}</S.Info>
        <S.Label>Office hour</S.Label>
        <S.Info><FontAwesomeIcon icon={faClock} />{officeHours}</S.Info>
        <S.Label>Lab location</S.Label>
        <S.Info><FontAwesomeIcon icon={faMapMarkerAlt} />{lab}</S.Info>
      </div>
    </S.Card>
  );
});

export default Card;