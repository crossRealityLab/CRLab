import React, { useState, useCallback, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../common/useFetch';
import ProjectItem from './projectItem';
import TagList from './tagList';
import _ from 'loadsh';

const S = {};
S.Projects = styled('div')`
  margin: -2px;
  display: flex;
  flex-wrap: wrap;
`;

const Projects = React.memo(() => {
  const [nowSelectedTag, setnowSelectedTag] = useState('all');
  const {data, isLoading, error, abort} = useFetch('');

  const renderProjectItem = useCallback(() => {
    if(nowSelectedTag === 'all'){
      return _.values(data)
              .map((item, index) => {
                return <ProjectItem 
                          key={index}
                          imgSrc={item.cover[0].url}
                          projTitle={item.showTitle}
                          projYear={item.year}
                        />
              })
    }else {
      return _.filter(_.values(data), function(o) { return o.tags.includes(nowSelectedTag)})
              .map((item, index) => {
                return <ProjectItem 
                          key={index}
                          imgSrc={item.cover[0].url}
                          projTitle={item.showTitle}
                          projYear={item.year}
                        />
              })
    }
  },[nowSelectedTag, data]);

  const getTags = useMemo(() => {
    let all_tag = [nowSelectedTag];
    _.values(data).forEach((item, index) => {
      all_tag = _.union(all_tag, item.tags);
    })
    return all_tag;
  },[data])

  const handleClickTab = useCallback((tagName) => {
    return () => setnowSelectedTag(tagName);
  },[])

  if (!data) return null;
  return (
    <S.Projects>
      <TagList tags={getTags} handleClickTab={handleClickTab} />
      {renderProjectItem()}
    </S.Projects>
  );
});

export default Projects;