import React, { useCallback }from 'react';
import styled from 'styled-components';
import { mediaMin } from '../../styles/style';
import Loader from '../../styles/loader';
import useData from '../../hooks/useData';
import ImageBanner from './imageBanner';
import _ from 'loadsh';
import ProjectBox from '../common/projectBox';
import { data, datas } from '../../utils/mockData';

const S = {};
S.MemberDetail = styled.div`
  width: 100%;
  line-height: 20px;
  & > ul {
    padding-left: 40px;
    list-style: disc;
  }
`;
S.SectionTitle = styled('h4')`
  font-size: 16px;
  margin: 20px 0 10px 0;
`;
S.List = styled.li`
  & > a:hover {
    color: ${props => props.theme.mainHover}
  }
`;
S.ProjList = styled('div')`
  margin: -2px;
  display: flex;
  flex-wrap: wrap;
  ${mediaMin.medium`
    width: 60%;
  `};
`;

const MemberDetail = ({ match }) => {
  const { uuid } = match.params;
  // const { data, isLoading } = useData('/projects', uuid);
  
  // if (isLoading || !data) {
  //   return <Loader />;
  // }
  const renderPublicationList = useCallback((input_data) => {
    return _.orderBy(input_data, ["year", "conference"], ["desc", "asc"]).map((item, index) => {
      return  <S.List key={index}>
                {item.link 
                  ? <>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">{`${item.title}. `}</a>
                      <em>{`${item.conference} ${item.year}`}</em>
                    </>
                  : <div>{`${item.title}, ${item.year}`}</div>}
              </S.List>
    })
  },[data]);

  const renderProject = useCallback(() => {
    return  _.filter(_.values(datas), function(o) { return o.authors.includes(data.fullName)})
            .map((item, index) => {
              return  <ProjectBox 
                        key={index}
                        imgSrc={item.cover[0].url}
                        projTitle={item.showTitle}
                        projYear={item.year}
                        uuid={item.uuid}
                      />
            })
  },[datas, data])

  return (
    <S.MemberDetail>
      <ImageBanner 
        imgSrc={data.avatar[0].url}
        name={data.fullName}
        title={data.title}
        focusOn={data.focusOn.join(', ')}
        email={data.email}
        website={data.website}
      />
      <S.SectionTitle>About</S.SectionTitle>
      <div>{data.about}</div>
      <S.SectionTitle>Publications</S.SectionTitle>
      <ul>{renderPublicationList(data.publications)}</ul>
      <S.SectionTitle>Awards</S.SectionTitle>
      <ul>{renderPublicationList(data.awards)}</ul>
      <S.SectionTitle>Projects</S.SectionTitle>
      <S.ProjList>
        {renderProject()}
      </S.ProjList>
    </S.MemberDetail>
  );
}

export default MemberDetail;