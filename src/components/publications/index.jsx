import React, { useCallback } from 'react';
import _ from 'loadsh';
import useFetch from '../common/useFetch';
import PublicationItem from './publicationItem';
import { data_project as data } from '../../utils/mockData'
const Publications = React.memo(() => {
  // const { data, isLoading, error, abort } = useFetch('');
  const renderItem = useCallback(() => {
    return _.values(data).map((item, index) => {
      return <PublicationItem 
                key={index}
                imgSrc={item.cover[0].url}
                projTitle={item.title}
                authors={renderAuthor(item.authors)}
                abstract={item.abstract}
                acceptedYear={item.acceptedYear}
                publication={item.publication}
                uuid={item.uuid}
              />
    })
  },[data])
  const renderAuthor = useCallback((authors) => {
    if(authors.length > 3)
      return authors.slice(0, -1).join(', ') + ` and ${authors.slice(-1)[0]}`;
    else return authors.join(', ')
  },[data]);

  return (
    <div>
      {renderItem()}
    </div>
  );
});

export default Publications;