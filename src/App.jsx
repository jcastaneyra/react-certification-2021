import React from 'react';
import { createGlobalStyle } from 'styled-components';
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
`;

export default function App() {
  return (
    <div className="App">
      <SearchProvider>
        <AppThemeProvider>
          <GlobalStyles />
          <Home />
        </AppThemeProvider>
      </SearchProvider>
    </div>
  );
}
