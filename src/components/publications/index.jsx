import React, { useCallback, useEffect } from 'react';
import _ from 'loadsh';
import PublicationItem from './publicationItem';
import useListData from '../../hooks/useListData';
import Loading from '../../styles/loader';

const Publications = React.memo(() => {
  const { data, isLoading } = useListData('/projects');
  useEffect(() => {
    console.log(data)
  })
  const renderItem = useCallback(() => {
    return _.filter(data, 'publicationOn').map((item, index) => {
      return <PublicationItem 
                key={index}
                imgSrc={item.cover}
                projTitle={item.title}
                authors={renderAuthor(item.authors)}
                abstract={item.abstract}
                acceptedYear={item.acceptedYear}
                publication={item.publicationOn}
                pdfSrc={item.pdf}
                doiSrc={item.doi}
                uuid={item.uuid}
              />
    })
  },[data]);

  const renderAuthor = useCallback((authors) => {
    if(authors.length > 3)
      return authors.slice(0, -1).join(', ') + ` and ${authors.slice(-1)[0]}`;
    else return authors.join(', ')
  },[data]);

  if (isLoading) return <Loading />;
  if (!data) return null;
  return (
    <div>
      {renderItem()}
    </div>
  );
});

export default Publications;