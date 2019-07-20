import React from 'react';
import styled from 'styled-components';
import SectionLayout from '../../components/common/sectionLayout';
import ProjectsComponent from '../../components/projects';

const S = {};

const Projects = () => {
  return (
    <SectionLayout sectionTitle="Projects">
      <ProjectsComponent />
    </SectionLayout>
    
  );
}

export default Projects;