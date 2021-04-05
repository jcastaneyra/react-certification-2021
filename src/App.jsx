import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import SearchProvider from './state/SearchProvider';
import AppThemeProvider from './AppThemeProvider';
// import { createBrowserHistory } from 'history';
import { BrowserRouter as Router } from 'react-router-dom';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: Roboto, sans-serif;
    ${(props) => props.theme.contentBackgroundColor};
  }
`;

// const history = createBrowserHistory();

export default function App() {
  return (
    <div className="App">
      <SearchProvider>
        <Router> 
          <AppThemeProvider>
            <GlobalStyles />
            <Home />
          </AppThemeProvider>
        </Router>
      </SearchProvider>
    </div>
  );
}
