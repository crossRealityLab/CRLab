import React, { useState } from 'react';
import styled from 'styled-components';

import { mediaMax } from '../../styles/style';
import SectionLayout from '../../components/common/sectionLayout';

const ImgWithCaption = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 454px;
  margin-top: 10px;

  ${mediaMax.mediumMax`
    min-height: unset;
  `};
`;

const ImgWrapper = styled.div`
  position: relative;
  flex: 0.7;
  width: 70%;

  ${mediaMax.mediumMax`
    flex: 1;
    width: 100%;
  `};
`;

const ArrowL = styled.div`
  position: absolute;
  top: 50%;
  left: 2%;
  display: inline-block;
  border-right: 4px solid #424242;
  border-bottom: 4px solid #424242;
  width: 20px;
  height: 20px;
  transform: translateY(-50%) rotate(-225deg);
`;

const ArrowR = styled.div`
  position: absolute;
  top: 50%;
  right: 2%;
  display: inline-block;
  border-right: 4px solid #424242;
  border-bottom: 4px solid #424242;
  width: 20px;
  height: 20px;
  transform: translateY(-50%) rotate(-45deg);
`;

const MainImg = styled.img`
  width: 100%;
`;

const Caption = styled.div`
  position: relative;
  flex: 0.3;
  align-self: stretch;
  background-color: rgba(0, 0, 0, 0.04);

  > p {
    position: absolute;
    bottom: 30px;
    left: 25px;
  }

  ${mediaMax.mediumMax`
    display: none;
  `};
`;

const ImgList = styled.div`
  width: 100%;

  ${mediaMax.mediumMax`
    display: none;
  `};
`;

const SubImg = styled.img`
  display: inline-block;
  width: 11%;
  margin-left: 2px;
  border: ${props => (props.isActive ? '3px solid' : '')};
`;

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

const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;

const TabItem = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2px;
  padding: 6px 10px;
  font-size: 9pt;
  font-weight: bold;
  background: #eeeeee;
  color: #000;
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

const mock = {
  title: 'Digital Fabrication of Soft Actuated Objects by Machine Knitting',
  authors: ['Lea Albaugh', 'Scott Hudson', 'Lining Yao'],
  year: 2019,
  imgs: [
    {
      caption: 'caption1',
      url:
        'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
    },
    {
      caption: 'caption2',
      url:
        'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
    },
    {
      caption: 'caption3',
      url:
        'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
    },
    {
      caption: 'caption3',
      url:
        'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
    }
  ],
  videos: [
    'https://www.youtube.com/watch?v=mj27koxzpdI',
    'https://www.youtube.com/watch?v=mj27koxzpdI'
  ],
  abstract:
    "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not onlfive centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s withthe release of Letraset sheets containing Lorem Ipsum passages, andore recently with desktop publishing software like Aldus PageMakerincluding versions of Lorem Ipsum.",
  descriptions: [
    "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not onlfive centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s withthe release of Letraset sheets containing Lorem Ipsum passages, andore recently with desktop publishing software like Aldus PageMakerincluding versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry's standard dummy text eversince the 1500s, when an unknown printer took a galley of type andscrambled it to make a type specimen book. It has survived not onlfive centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s withthe release of Letraset sheets containing Lorem Ipsum passages, andore recently with desktop publishing software like Aldus PageMakerincluding versions of Lorem Ipsum."
  ],

  publication: 'CHI',
  acceptedYear: 2019,
  doi:
    'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'
};

const getYoutubeVid = (link = '') => {
  const match = /\?v=(.+)/.exec(link);
  const id = match ? match[1] : '';
  return id;
};

export default () => {
  const [mainImgIdx, setMainImgIdx] = useState(0);
  const [tableContentIdx, setTableContentIdx] = useState(-1);

  const handleImgLeft = () => {
    if (mainImgIdx > 0) {
      setMainImgIdx(i => i - 1);
    }
  };

  const handleImgRight = () => {
    if (mainImgIdx < mock.imgs.length - 1) {
      setMainImgIdx(i => i + 1);
    }
  };

  return (
    <SectionLayout>
      <ImgWithCaption>
        <ImgWrapper>
          <ArrowL onClick={() => handleImgLeft()} />
          <MainImg src={mock.imgs[mainImgIdx].url} />
          <ArrowR onClick={() => handleImgRight()} />
        </ImgWrapper>
        <Caption>
          <p>{mock.imgs[mainImgIdx].caption}</p>
        </Caption>
      </ImgWithCaption>
      <ImgList>
        {mock.imgs.map((img, idx) => (
          <SubImg
            onClick={() => setMainImgIdx(idx)}
            src={img.url}
            isActive={idx === mainImgIdx}
          />
        ))}
      </ImgList>

      <ContentWrapper>
        <TitleAndAuthors>
          {mock.title} <span>{mock.year}</span>
          <div>{mock.authors.join(', ')}</div>
        </TitleAndAuthors>

        <Tabs>
          <TabItem onClick={() => setTableContentIdx(i => (i === 0 ? -1 : 0))}>
            Publication
          </TabItem>
          <TabItem>Press Inquiries</TabItem>
          <TabItem>
            Share:
            <ShareLink>
              <i className="fab fa-twitter fa-sm" />
            </ShareLink>
            <ShareLink>
              <i className="fab fa-facebook-square fa-sm" />
            </ShareLink>
          </TabItem>
        </Tabs>
        {tableContentIdx > -1 && (
          <TableContent>
            {tableContentIdx === 0 ? (
              <a href={mock.doi}>
                <span>
                  {mock.publication}
                  {mock.acceptedYear}
                </span>{' '}
                <span>{mock.title}</span>
              </a>
            ) : (
              ''
            )}
          </TableContent>
        )}

        <h3>Abstract</h3>
        <p>{mock.abstract}</p>

        <hr />

        {mock.descriptions.map((des, idx) => (
          <p key={idx}>{des}</p>
        ))}

        {mock.videos.map((link, idx) => {
          const id = getYoutubeVid(link);
          if (id) {
            return (
              <VideoContainer>
                <iframe
                  title={idx}
                  src={`https://www.youtube.com/embed/${id}`}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
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
