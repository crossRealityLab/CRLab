import React, { useCallback } from 'react';
import styled from 'styled-components';
import Person from './person';
import useListData from '../../hooks/useListData';
import NoFoundPerson from '../../images/noFoundImgPerson.png';
import Loading from '../../styles/loader';

const S = {};
S.Teams = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin: -12px;
`;

const Teams = React.memo((props) => {
  const { data, isLoading } = useListData('/members');

  const renderPerson = useCallback(() => {
    return data.map((item, index) => {
      return <Person 
                key={index}
                imgSrc={!!item.avatar ? item.avatar[0].url : NoFoundPerson}
                name={item.fullName}
                title={item.title}
                focusTopic={item.focusOn && item.focusOn.join(', ')}
                email={item.email}
                website={item.website}
                publication={item.publication}
                uuid={item.uuid}
                {...props}
              />
    })
  },[data]);

  if(isLoading) return <Loading />;
  if(!data) return;
  return (
    <S.Teams>
      {renderPerson()}
    </S.Teams>
  );
});

export default Teams;