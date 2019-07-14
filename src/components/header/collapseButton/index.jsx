import React from 'react';
import styled from 'styled-components';
import { mediaMin, mediaMax } from '../../../styles/style';

const S = {};
S.CollapseButtonWrapper = styled('div')`
  width: 27px;
  height: 14px;
  position: relative;
  margin-left: auto;
  ${mediaMin.medium`
    display: none;
  `}
`;
S.CollapseButton = styled('button')`
  display: block;
  bottom: 0;
  border: 0;
  padding: 0;
  outline: none;
  &, &:after, &:before {
    border-radius: 1px;
    width: 22px;
    height: 2px;
    background-color: #222222;
    position: absolute;
    transition: .2s;
    transition-timing-function: ease;
  }
  &:before {
    display: block;
    content: '';
    top: -6px;
    transition: top .12s cubic-bezier(.33333, .66667, .66667, 1) .3s, transform .15s cubic-bezier(.55, .055, .675, .19);
  }
  &:after {
    display: block;
    content: '';
    top: -12px;
    transition: top .3s cubic-bezier(.33333, .66667, .66667, 1) .3s, opacity .1s linear;
  }
  .collapse-ing &:before {
    top: 0;
    transform: rotate(-90deg);
    transition: top .12s cubic-bezier(.33333, 0, .66667, .33333) .18s, transform .15s cubic-bezier(.215, .61, .355, 1) .42s;
  }
  .collapse-ing &:after {
    top: 0;
    opacity: 0;
    transition: top .3s cubic-bezier(.33333, 0, .66667, .33333), opacity .1s linear .27s;
  }
  .collapse-ing & {
    transform: translate3d(0, -4px, 0) rotate(-45deg);
    transition-delay: .32s;
    transition-timing-function: cubic-bezier(.215, .61, .355, 1);
  }
`;
const CollapseButton = React.memo(React.forwardRef((props, ref) => {
  return (
    <S.CollapseButtonWrapper ref={ref} className={props.className} onClick={props.toggle}>
      <S.CollapseButton />
    </S.CollapseButtonWrapper>
  );
}));

export default CollapseButton;