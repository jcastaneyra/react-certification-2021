import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import SearchProvider from './state/SearchProvider';
import AppThemeProvider from './AppThemeProvider';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-family: Roboto, sans-serif;
  }

  #root {
    background-color: ${(props) => props.theme.contentBackgroundColor};
    height: 100vh;
  }
`;

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
