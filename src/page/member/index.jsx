import React from 'react';
import SectionLayout from '../../components/common/sectionLayout';
import MemberDetail from '../../components/memberDetail';

const Member = (props) => {
  return (
    <SectionLayout>
      <MemberDetail {...props}/>
    </SectionLayout>
  );
}

export default Member;