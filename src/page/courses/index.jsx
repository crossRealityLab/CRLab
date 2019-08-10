import React from 'react';
import styled from 'styled-components';

import Loading from '../../styles/loader';
import SectionLayout from '../../components/common/sectionLayout';
import useListData from '../../hooks/useListData';
import { mediaMax } from '../../styles/style';

const Wrapper = styled.div`
  width: 70%;
  margin-left: 30%;

  ${mediaMax.mediumMax`
    width: 100%;
    margin-left: unset;
  `};
`;

const Course = styled.div`
  line-height: 22px;

  > h3 {
    font-size: 10pt;
    text-decoration: underline;
  }

  &:not(:last-child) {
    padding-bottom: 20px;
    border-bottom: 1px solid;
  }
`;

const renderCourse = courseData => (
  <Course key={courseData.uuid}>
    <h2>{courseData.name}</h2>
    <h3>Basic Information</h3>
    <div>
      <strong>Course number: </strong>
      {courseData.courseID}
    </div>
    <div>
      <strong>Number of credits: </strong>
      {courseData.credits} units
    </div>
    <div>
      <strong>Term and year: </strong>
      {courseData.termAndYear}
    </div>
    <div>
      <strong>Location: </strong>
      {courseData.location}
    </div>
    <div>
      <strong>TA: </strong>
      {courseData.tas ? courseData.tas.map(ta => ta.name).join(', ') : 'TBA'}
    </div>
    <div>
      <strong>Instructor: </strong>
      Liwei Chan
    </div>
    <div>
      <strong>Office location: </strong>
      {courseData.office}
    </div>
    <div>
      <strong>Office hours: </strong>
      {courseData.officeHours}
    </div>
    <div>
      <strong>Email: </strong>
      {courseData.email}
    </div>
    <div>
      <strong>NCTU course's information link: </strong>
      <a href={courseData.link} target="_blank">
        {courseData.link}
      </a>
    </div>
    <br />
    <h3>Course description</h3>
    {courseData.descriptions &&
      courseData.descriptions.map(des => <p key={des}>{des}</p>)}
  </Course>
);

const Courses = () => {
  const { isLoading, data } = useListData('/courses');

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SectionLayout sectionTitle="Courses">
      <Wrapper>
        {Object.entries(data).map(([key, value]) => renderCourse(value))}
      </Wrapper>
    </SectionLayout>
  );
};

export default Courses;
