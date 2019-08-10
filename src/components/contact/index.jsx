import React from 'react';
import styled from 'styled-components';
import { mediaMax } from '../../styles/style';
import Loader  from '../../styles/loader';
import useData from '../../hooks/useData';
import ContactCard from './contactCard';
import { contactData as data } from '../../utils/mockData';

const S = {};
S.Contact = styled.div`
  display: flex;
  ${mediaMax.mediumMax`
    flex-direction: column-reverse;
  `};
`;
S.ContactContent = styled.div`
  margin-left: 70px;
  ${mediaMax.largeMax`
    margin-left: 40px;
  `};
  ${mediaMax.mediumMax`
    margin-bottom: 15px;
    margin-left: 0;
  `};
  & > img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Contact = React.memo(() => {
  // const { data, isLoading } = useData();
  // if (isLoading) return <Loader />
  // if (!data) return null;
  return (
    <S.Contact>
      <ContactCard 
        name={data.name}
        email={data.email}
        office={data.office}
        officeHours={data.officeHours}
        lab={data.lab}
      />
      <S.ContactContent>
        <img src={data.banner} alt="contact" />
        {data.description.map((item, index) => 
          <p key={index}>{item}</p>
        )}
      </S.ContactContent>
    </S.Contact>
  );
});

export default Contact;