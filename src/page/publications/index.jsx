import React from 'react';
import styled from 'styled-components';
import SectionLayout from '../../components/common/sectionLayout';
import PublicationComponent from '../../components/publications';
const S = {};

const Publications = () => {
  return (
    <SectionLayout sectionTitle="Publications">
      <PublicationComponent />
    </SectionLayout>
  );
}

export default Publications;