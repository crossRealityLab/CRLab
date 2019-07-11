import { createGlobalStyle, css} from 'styled-components';
import { modernNormalize } from 'styled-modern-normalize';

const sizes = {
  small: 577,
  smallMax: 576,
  medium: 769,
  mediumMax: 768,
  large: 1025,
  largeMax: 1024,
  xlarge: 1441,
  xlargeMax: 1440
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

const GlobalStyle = createGlobalStyle`
  ${modernNormalize}
  html {
    height: 100%;
  }
  body {
    font-family: Interstate;
    font-size: 16px;
    color: #222222;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
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
    cursor: pointer;
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
    }
  }
`;
export default GlobalStyle;

