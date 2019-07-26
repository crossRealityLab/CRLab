import React from 'react';
import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loading = keyframes`
  0% {
    transform: scaleY(0.1);
    background-color: #fff;
  }
  50% {
    transform: scaleY(0.7);
    background-color: #ddd;
  }
  100% {
    transform: scaleY(0.1);
    background: transparent;
  }
`;

const Bar = styled.div`
  display: inline-block;
  width: 6px;
  height: 60px;
  margin-right: 1px;
  background-color: #fff;
  transform-origin: bottom;
  animation: ${Loading} 1.2s ease-in-out infinite;
  animation-delay: ${props => props.delay || 0}s;
`;

export default () => (
  <Wrapper>
    {[...Array(8)].map((elem, idx) => (
      <Bar key={idx} delay={(idx + 1) / 10} />
    ))}
  </Wrapper>
);
