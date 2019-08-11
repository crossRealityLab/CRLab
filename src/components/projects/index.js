import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import useListData from '../../hooks/useListData';
import Loading from '../../styles/loader';
import ProjectBox from '../common/projectBox'
import TagList from './tagList';
import NoFoundImg from '../../images/noFoundImg.png';
import _ from 'loadsh';

const S = {};
S.Projects = styled('div')`
  margin: -2px;
  display: flex;
  flex-wrap: wrap;
`;

const Projects = React.memo(() => {
  const [nowSelectedTag, setnowSelectedTag] = useState('all');
  const { data, isLoading } = useListData('/projects');

  const renderProjectItem = useCallback(() => {
    if(nowSelectedTag === 'all'){
      return data.map((item, index) => {
                return <ProjectBox 
                          key={index}
                          imgSrc={item.cover ? item.cover[0].url : NoFoundImg}
                          projTitle={item.showTitle}
                          projYear={item.year}
                          uuid={item.uuid}
                        />
              })
    }else {
      return _.filter(data, function(o) { return o.tags.includes(nowSelectedTag)})
              .map((item, index) => {
                return <ProjectBox 
                          key={index}
                          imgSrc={item.cover ? item.cover[0].url : NoFoundImg}
                          projTitle={item.showTitle}
                          projYear={item.year}
                          uuid={item.uuid}
                        />
              })
    }
  },[nowSelectedTag, data]);

  const getTags = useMemo(() => {
    let all_tag = [nowSelectedTag];
    data.forEach((item, index) => {
      all_tag = _.union(all_tag, item.tags);
    })
    return all_tag;
  },[data])

  const handleClickTab = useCallback((tagName) => {
    return () => setnowSelectedTag(tagName);
  },[])

  if (isLoading) return <Loading />;
  if (!data) return null;
  return (
    <S.Projects>
      <TagList tags={getTags} handleClickTab={handleClickTab} />
      {renderProjectItem()}
    </S.Projects>
  );
});

export default Projects;