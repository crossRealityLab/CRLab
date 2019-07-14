import { createGlobalStyle, css} from 'styled-components';
import { modernNormalize } from 'styled-modern-normalize';

const sizes = {
  small: 577,
  smallMax: 576,
  medium: 769,
  mediumMax: 768,
  large: 993,
  largeMax: 992,
  xlarge: 1201,
  xlargeMax: 1200
}

export const mediaMin = (Object.keys(sizes)).reduce((acc, label) => {
  acc[label] = (first, ...interpolations) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(first, ...interpolations)}
    }
  `;
  return acc;
}, {});

export const mediaMax = (Object.keys(sizes)).reduce((acc, label) => {
  acc[label] = (first, ...interpolations) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(first, ...interpolations)}
    }
  `;
  return acc;
}, {});

export const mainTheme = {
  mainHover: '#d8d8d8',
}
const GlobalStyle = createGlobalStyle`
  ${modernNormalize}
  html {
    height: 100%;
  }
  body {
    font-family: Interstate;
    font-size: 14px;
    line-height: 14pt;
    color: #424242;
  }
  h1, h2, h3, h4, h5, h6 {
    clear: both;
    color: #212121;
    font-weight: 700;
    font-style: normal;
  }
  input {
    border: 0px solid;
  }
  textarea:focus, input:focus{
    outline: none;
  }
  ul,ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  p {
    font-family: Arial;
  }
  a {
    color: #222222;
    cursor: pointer;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }
  }
  #root {
    height: 1500px;
    & > div:nth-of-type(1){
      padding-top: 80px;
    }
  }
`;
export default GlobalStyle;

