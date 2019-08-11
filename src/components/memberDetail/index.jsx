import React, { useCallback }from 'react';
import styled from 'styled-components';
import _ from 'loadsh';
import useListData from '../../hooks/useListData';
import useData from '../../hooks/useData';
import { mediaMin } from '../../styles/style';
import Loading from '../../styles/loader';
import ImageBanner from './imageBanner';
import ProjectBox from '../common/projectBox';
import NoFoundPerson from '../../images/noFoundImgPerson.png';

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
  const { data, isLoading } = useData('/members', uuid);
  const { data: proj_data, isLoading: proj_isLoading } = useListData('/projects');

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
    const map_proj_array = _.filter(proj_data, function(o) { return o.authors.includes(data.fullName)});
    const map_proj_data = map_proj_array.map((item, index) => (
        <ProjectBox 
          key={index}
          imgSrc={item.cover[0].url}
          projTitle={item.showTitle}
          projYear={item.year}
          uuid={item.uuid}
        />));
    return !!map_proj_array.length &&
      <>
        <S.SectionTitle>Projects</S.SectionTitle>
        <S.ProjList>
          {map_proj_data}
        </S.ProjList>
      </>
  },[proj_data, data])

  if(isLoading || proj_isLoading || !data || !proj_data) return <Loading />;

  return (
    <S.MemberDetail>
      <ImageBanner 
        imgSrc={!!data.avatar ? data.avatar[0].url : NoFoundPerson}
        name={data.fullName}
        title={data.title}
        focusOn={data.focusOn && data.focusOn.join(', ')}
        email={data.email}
        website={data.website}
      />
      {!!data.about && 
        <>
          <S.SectionTitle>About</S.SectionTitle>
          <div>{data.about}</div>
        </>
      }
      {!!data.publications && !!data.publications.length &&
        <>
          <S.SectionTitle>Publications</S.SectionTitle>
          <ul>{renderPublicationList(data.publications)}</ul>
        </>
      }
      {
        !!data.awards && !!data.awards.length &&
        <>
          <S.SectionTitle>Awards</S.SectionTitle>
          <ul>{renderPublicationList(data.awards)}</ul>
        </>
      }
      {renderProject()}
    </S.MemberDetail>
  );
}

export default MemberDetail;