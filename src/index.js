import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styles/style';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from './styles/style';

ReactDOM.render(
  <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <App />
      </ThemeProvider>
  </React.Fragment>
  , 
  document.getElementById('root')
);