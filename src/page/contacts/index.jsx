import React from 'react';
import styled from 'styled-components';
import SectionLayout from '../../components/common/sectionLayout';
import Contact from '../../components/contact';
const S = {};

const Contacts = () => {
  return (
    <SectionLayout sectionTitle="Contacts">
      <Contact />
    </SectionLayout>
  );
}

export default Contacts;