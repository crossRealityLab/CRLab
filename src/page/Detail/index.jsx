import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import ImgGallery from './ImgGallery';
import { mediaMax } from '../../styles/style';
import SectionLayout from '../../components/common/sectionLayout';

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
  cursor: pointer;

  &:last-child {
    cursor: unset;
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
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQEAAADECAMAAACoYGR8AAAAjVBMVEX/f3//gYH/g4MvMjIjLy8rMTGrX19KOzv7fn6nXV0wMjIsMTEnMDD3fHwiLy8zMzNSPj68ZWWCT08SLCxwSEhiRETMbGzseHjjdHQbLS12S0vodnbYcHBBODiSVVVGOTm0YmKMUlIAKSllRETCZ2eeWlrSbW1YPz+PVFSGUVG4YmIAIyNsR0dkRUV8TU1NmkZuAAAJIklEQVR4nO2c6WKqMBaAzSaahAS1ClE2K0jteH3/x5vQRSFg663a6Z2e71dFEuBrlnMS2sEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgXwYh9G0XeuN7rncpKAxX/jdcBvtRvJhMJkUcr3z8kyxgj6jhve8HoTjdJMyoGu1tnib+4MdI+A4DOFrOpBBMUkWplIxJQ/d5+EMUWAP0zgZwkTAtZLBMh/lwmB7mmWScyWT7MxTc3wCKDeGmWoQI18MgxqOomErKzPMvMYBWCSFi0Rz8rIbBZPn4WwzgVPFkgd3DaLCNf4cB5Cdcph0B9Tc/Q8D9DRSC858y7PdydwO5En++IeT6Onc3kEo2vV/1N+DuBtaSrX9yJ7i/gVKyw+h+9V/P3Q0MpdhcNg68xks1Pfnj8dDLOe0Teg69HT8VPlPt4AMDH5a6HLQgXESf12GTx1W0GKa73WGX5ttw5BQJw/DltEGUP+125eI0vSA/HtaHtqFzq34Y+q9PEkZ5auu1pdxqB+cMIOSvirIu9By7Ff8ddTxAy754oHkSRkW50cbYvKlGGX1YtC/7J0vsQ+NoSl5OUt7z6/cIFXOl6kMmSVvPh/IkqZ8Mj8rg9Qxq9NIGp87Few1gf7yRxpaiVJkgDT95gA/BT5TrjxsBCg8zY1NGpsxMMkKNYoKZqhVFBEzZX8VQUcW9TChBzN5HteD9jFHpedowopLmddBYqdJqGiplK9ZZppUUbBasnHvpMYBG5UxZYYlXVZmiTKrh4OvNAK0ywjYfVoCiREiZVNN8G61WqyjKp57Uct5UEBAZo5LKbByF4WqyEVo+IetuQ1kyrA8tHgQXmd/IPsZUltifKiGqfGV7URiXleQsc6LxrgFbqySiKqO6UBiNPcbl9IqOgPKZVsueDtgwoElZRC+DzivYL5lWu0bbswaigppl+HbS2HATo9GSqv3q7dCz4nTtGEAHJZPifYXOJmSciaTdCjoGUOhJofMRPt7M+JGb8goFOGWceXGnAzYuuXCXDxEuZavzBIQME7M7irSVsn3dKw6nQ8NWkdrAeEfNwW92jbASIvvQAPIrKYJWf8I2tFeLa4ZDmx4Knp4fUnu+QH5AaN40oDM5P7Uk+4sSyUKzoHHIr5rrXdYAqYScjpwWzrjJm4dcAziVPHF6iu1/IrgiqkFoIiSXKt2i8w2hU2gs2fL00RoQWbP54idJknaLtvcu5vhUAdV2BHK7H3omRDdHGMcA8mfaTJyxH43mQl61noGipRRccq+M/QvrQVtGvJN2a0BNWr21UJqrMW4VMTw5FqkNcO2O/JZK0GYx10AqSdANDyaUPVwVGaHBolKSEMo2k8tWBtCKcXIKJu044LXkoXCmedKaMZGvGgNBbUCmPRHQUJHqbBtAYbv3HY/PuLr0l3cGhON1PWkLk+QXVTUSenY60c4F7dEY+YQ7D2ijL0IWTQOqJxBBYUJ0o587BmJFsp71DPzATHFt9mCj0+IhkZzLqrigGbgG6KRdZuQR6UQyvh3oi4YBrvtiudGSyclZA2Mq9j2lUK7kZ6HtBdgpLxorygV9Oq/gPSboGHCmo5Ed6F0p+8ah+lk2ffdsJ9pme2obwFZP36IeWih2uEkGaZ9srG200xmjX7/ENiGJ4+0LxOkFrgE7PDvtcvTAWgbYsneBMldiftbAnJi+mR9t9aU57qfYdrBhmm3cy1g3q+F6P/cSzWu0/tQA+5qBeso4Z8D2LdOXxdjInVU3W+9Eg4PSTpiJ8GpcvewrmnfuZiAyXJ8+tgygMCMqxD2EmegkVV8HoaWd6ppxF7KJgGRKV9N0WGzjF/i9DIRGq9PHtoEo4dwLvA5Bpol3OwP1RpJNt3Djc0WF9IZxeEqPOrPhrQwMRjM9O33qGNCyFyY/SfL/DlzSRjhj2x5jyQS13iv43xk4TPtZ33LfA60EP94/8veSzd3q72YArYyWp49tA3XjvGFjPw/y56d4BtuZuzvO3s9A/OFIyGffYmCA1qxe5Hn9WfFZZxsV+XczYGfDxhKBExMG/fHA7an3kt5iLFTQvmwsZvcy8KzE5pwBPBf3fqPk/UqlZDv09iOV3TUoVMirDfRG+C9RcXrWwI7J3fXx/yVM2fttjA7MDfBrdte3AZ70ZkYPrFnQ6QV5O3e+H/5eqLc0vHXfxzvxs+sjIm165i+00qS5rO4YiHgrd74bKNTH2dC2AdpZgcJjdX1UrOW4+yy25mZi5K4R2fySXrMufCk4V/x9jQ+tZWccQFEmbmCAJ52ZDfkeUfl5Ayg3nF25GuResi/T8gNyzA7RUJLA+R5vaJBcb0DLnXt5PGbtRaDOajkhx3n6FqAwDTsLxAgdmFbv7xPaCEWb1rtWdfJIFx6/2kAiadpWgO3FZq1iHQMT5qzAXgcKk2To7BQgf620XJ8+V4I0tyjwai9VipOrDYjDVNJ1a8ck9oizNNHdM1pTzjsbhV9uFdYAU17ZyPkwLuZUM326MTv1c1a974fhQa6l2oxuYIAdBhVV8/i4/4WftWBe+IkBf6+4mr6WGrwu22H0vPtyXlQKKaRJ1s827Y/ibbHWRnCzb9aHSsOFOhRRFMWLnVCM7TC6hYElHj0oNtsXcej7YTzOFJGB8yQ9O6doSgkzf/Jt6A9GfhgtnufGJF82gOJDIhmRVCRJpjWVnEhdOqNtyYRmNMky+z2jXv0YtzGARk/apvZJUFWBts9FHtxxvm/3fFB4Ugiqg2qzqapEKiY75v5GAV7le2LU20qDmmVlZxvV9ozZy+sTVM3mr/sJmD3+53i3o+Tx0TUQPD66a8Xzx9O7um95AULxjhpK67fazexh0ZmasH587IQNyM835qUUpUqZWWIb6DXzQ92f4rzc1asM6STqezPH3uhwXX+dhzf6K5RjZoTQaFvauqdp4V9ctb0JvyjX9S2nw8K/xZ/ivL8ldfbvS95OuNnLts3c8Et1f/Ri1z/B+VWy3wIYAANgAAyAATAABsAAGAADaDwzD7/bwHY8vvr9t3+bn/fPHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6f+S/0pqzBzJ1LYgAAAABJRU5ErkJggg=='
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
  const [tableContentIdx, setTableContentIdx] = useState(-1);

  return (
    <SectionLayout>
      <ImgGallery imgs={mock.imgs} />
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
              <FontAwesomeIcon icon={faTwitter} />
            </ShareLink>
            <ShareLink>
              <FontAwesomeIcon icon={faFacebookSquare} />
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
