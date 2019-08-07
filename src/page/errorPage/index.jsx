import React, { useCallback }from 'react';
import styled, { keyframes } from 'styled-components';
import { mediaMax } from '../../styles/style';
import SectionLayout from '../../components/common/sectionLayout';

const S = {};
const Float = keyframes`
  100% {
		transform: translateY(20px);
	}
`;
const Type = keyframes`
  0% {
    max-width: 0%;
  }
  100% {
    max-width: 100%;
  }
`;
const Blink = keyframes`
  0% {
    border-right-color: ${props => props.theme.contentColor};
  }
  100% {
    border-right-color: transparent;
  }
`;
S.ErrorBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  flex-direction: column;
`;
S.Error404 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13vw;
  margin-bottom: 15px;
  & > div {
    font-size: 12vw;
    font-weight: 600;
    text-align: center;
    color: #ccc;
    transition: 0.3s;
    animation: ${Float} 2s infinite ease-in-out alternate;
  }
  ${mediaMax.smallMax`
    height: 20vw;
    & > div {
      font-size: 20vw;
    }
  `};
  & > div:hover {
    color: #eee;
    margin-top: 10px;
  }
  
  & > div:nth-child(2) {
    animation-delay: 0.4s;
  }
  & > div:nth-child(3) {
    animation-delay: 0.8s;
  }
`;
S.ErrorContent = styled.div`
  text-align: left;
  width: auto;
  max-width: 0%;
  line-height: 0;
  overflow: hidden;
  border-right: solid 2px ${props => props.theme.contentColor};
  animation: ${Type} 3s steps(80) 1s normal both, ${Blink} 500ms steps(40) 10 forwards;
  & > p {
    font-size: 3vw;
    font-weight: 600;
    white-space: nowrap !important;
  }
  ${mediaMax.smallMax`
    & > p {
      font-size: 5vw;
    }
  `};
`;
S.Line = styled.div`
  width: 30vw;
  height: 5px;
  background-color: grey;
  margin-bottom: 20px;
`;
S.BackButton = styled.button`
  margin-top: 20px;
  cursor: pointer;
  padding: 12px 22px;
  border-radius: 4px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  font-size: 1em;
  font-weight: 600;
  text-transform: uppercase;
  outline: none;
  border: 0;
  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }
`;
const ErrorPage = ({ history }) => {
  const handleBack = useCallback((e) => {
    e.preventDefault();
    history.push('/');
  },[history])
  return (
    <SectionLayout sectionTitle="Contacts">
      <S.ErrorBox>
        <S.Error404>
          <div>4</div>
          <div>0</div>
          <div>4</div>
        </S.Error404>
        <S.Line />
        <S.ErrorContent>
          <p>Oops! That page can’t be found.</p>
        </S.ErrorContent>
        <S.BackButton onClick={handleBack}>Back to home</S.BackButton>
      </S.ErrorBox>
    </SectionLayout>
  );
}

export default ErrorPage;