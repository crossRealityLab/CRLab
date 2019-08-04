import React, { useCallback }from 'react';
import styled from 'styled-components';
import { mediaMin, mediaMax } from '../../styles/style';
import useData from '../../hooks/useData';
import useListData from '../../hooks/useListData';
import Loader from '../../styles/loader';
import SubSectionTitle from '../../styles/subSectionTitle';
import ProjectBox from '../common/projectBox';
import NewsBox from '../common/newsBox';
import SectionLayout from '../../components/common/sectionLayout';
import HomePageBanner from './homePageBanner';
import VisionBox from './visionItem';
import { labData as data_intro, datas as data_proj, news_data as data_news} from '../../utils/mockData';
import _ from 'loadsh';

const S = {};
S.HomePage =styled.div`
`;
S.ProjList = styled('div')`
  margin: -2px;
  display: flex;
  flex-wrap: wrap;
`;
S.NewsList = styled('div')`
  margin: 0 -12px -12px -12px;
`;
S.Vision = styled('div')`
  background-color: #f4f4f4;
  padding: 20px;
  display: flex;
  ${mediaMax.medium`
    flex-direction: column;
  `};
`;
const HomePage = props => {
  // const { data: data_proj, isLoading: isLoading__proj } = useListData();
  // const { data: data_news, isLoading: isLoading_news } = useListData();
  // const { data: data_intro, isLoading: isLoading_intro } = useData();

  const renderProjects = useCallback(() => {
      return _.values(data_proj)
              .map((item, index) => {
                return <ProjectBox 
                          key={index}
                          imgSrc={item.cover[0].url}
                          projTitle={item.showTitle}
                          projYear={item.year}
                          uuid={item.uuid}
                        />
              })
  },[data_proj]);

  const renderNews = useCallback(() => {
    return _.values(data_news)
            .sort(function(a,b) {
              return new Date(b.date) - new Date(a.date); 
            }).map((item, index) => {
              return <NewsBox 
                        key={index}
                        title={item.title}
                        description={item.description}
                        date={item.date}
                      />
            })
  },[data_news])

  // if (isLoading__proj || isLoading_news || isLoading_intro) return <Loader />;
  // if(!data_proj || !data_news || !data_intro) return null;
 
  return (
    <S.HomePage id="homePage">
      <HomePageBanner 
        title={data_intro.title}
        subTitle={data_intro.subTitle}
      />
      <SectionLayout>
        <SubSectionTitle>Projects</SubSectionTitle>
        <S.ProjList>{renderProjects()}</S.ProjList>
        <SubSectionTitle>Vision</SubSectionTitle>
        <S.Vision>
          {data_intro.vision.map((item, index) => (
            <VisionBox key={index} visionDescription={item} />
          ))}
        </S.Vision>
        <SubSectionTitle>News</SubSectionTitle>
        <S.NewsList>
          {renderNews()}
        </S.NewsList>
      </SectionLayout>
      
    </S.HomePage>
  );
}

export default HomePage;