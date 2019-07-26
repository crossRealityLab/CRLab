import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import ImgGallery from './ImgGallery';
import TabsWithContent from './TabsWithContent';
import Loading from './Loading';

import { mediaMax } from '../../styles/style';
import SectionLayout from '../../components/common/sectionLayout';
import useData from '../../hooks/useData';

const ContentWrapper = styled.div`
  width: 70%;

  ${mediaMax.mediumMax`
    width: 100%;
  `};
`;

const TitleAndAuthors = styled.div`
  margin: 30px 0;
  color: #424242;
  font-size: 16pt;
  font-weight: bold;
  line-height: 16pt;

  > span {
    font-size: 14pt;
    font-weight: 300;
  }

  > div {
    font-size: 12pt;
    font-weight: 400;
  }
`;

const ShareLink = styled.a`
  margin: 0 3px;
  color: #999;
  font-size: 12pt;
`;

const TableContent = styled.div`
  display: inline-block;
  margin-top: 2px;
  padding: 10px;
  background: #eeeeee;
  color: #000;

  span:first-child {
    color: #808080;
    font-size: 9pt;
  }

  span:last-child:hover {
    color: #d8d8d8;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  margin: 20px 0;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;

  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const tabsConfig = [
  {
    tabContent: 'Publication',
    clickable: true,
    renderBottom: ({ title, doi, publication, acceptedYear }) => (
      <TableContent>
        <a href={doi}>
          <span>
            {publication}
            {acceptedYear}
          </span>{' '}
          <span>{title}</span>
        </a>
      </TableContent>
    )
  },
  {
    tabContent: 'Press Inquiries',
    clickable: false,
    renderBottom: () => null
  },
  {
    tabContent: (
      <>
        Share:
        <ShareLink>
          <FontAwesomeIcon icon={faTwitter} />
        </ShareLink>
        <ShareLink>
          <FontAwesomeIcon icon={faFacebookSquare} />
        </ShareLink>
      </>
    ),
    clickable: false,
    renderBottom: () => null
  }
];

const getYoutubeVid = (link = '') => {
  const match = /\?v=(.+)/.exec(link);
  const id = match ? match[1] : '';
  return id;
};

export default ({ match }) => {
  // fallback to 3e485bbe-4a66-4dd0-9a84-093705bf22b9 for testing.
  const uuid = match && match.params.uuid ? match.params.uuid : '3e485bbe-4a66-4dd0-9a84-093705bf22b9';
  const { data, isLoading } = useData('/projects', uuid);

  if (isLoading || !data) {
    return <Loading />;
  }

  return (
    <SectionLayout>
      <ImgGallery imgs={data.imgs} />
      <ContentWrapper>
        <TitleAndAuthors>
          {data.title} <span>{data.year}</span>
          <div>{data.authors.join(', ')}</div>
        </TitleAndAuthors>
        <TabsWithContent tabsConfig={tabsConfig} data={data} />
        <h3>Abstract</h3>
        <p>{data.abstract}</p>
        <hr />
        {data.descriptions.map((des, idx) => (
          <p key={idx}>{des}</p>
        ))}
        {data.videos.map((link, idx) => {
          const id = getYoutubeVid(link);
          if (id) {
            return (
              <VideoContainer>
                <iframe
                  key={id}
                  title={idx}
                  src={`https://www.youtube.com/embed/${id}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                />
              </VideoContainer>
            );
          }
          return null;
        })}
      </ContentWrapper>
    </SectionLayout>
  );
};
