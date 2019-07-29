import React from 'react';
import styled from 'styled-components';
import SectionLayout from '../../components/common/sectionLayout';
import TeamsComponent from '../../components/teams';
const S = {};

const Teams = (props) => {
  return (
    <SectionLayout sectionTitle="Teams">
      <TeamsComponent {...props}/>
    </SectionLayout>
  );
}

export default Teams;