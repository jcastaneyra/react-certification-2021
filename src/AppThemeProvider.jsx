import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSearch } from './state/SearchProvider';

const theme = {
  light: {
    headerBackgroundColor: '#1c5476',
    contentBackgroundColor: '#fff',
    titleColor: '#000',
    descColor: 'rgba(0, 0, 0, 0.54)',
    borderCard: '1px solid #cccccc',
    backgroundCard: '#fff',
    searchBackgroundColor: '#226691',
    searchPlaceholder: '#83bfe2',
    button: '#1C5476',
    buttonBackground: '#f1f1f1',
    backgroundError: '#ffe0e0',
    error: '#ba3939',
    linkBackgroundHover: 'rgba(0, 0, 0, 0.04)',
  },
  dark: {
    headerBackgroundColor: '#556cd6',
    contentBackgroundColor: '#303030',
    titleColor: '#fff',
    descColor: 'rgba(255, 255, 255, 0.7)',
    borderCard: '1px solid #303030',
    backgroundCard: '#424242',
    searchBackgroundColor: '#627CF6',
    searchPlaceholder: '#A7B4F6',
    button: '#2F8BC6',
    buttonBackground: '#2A4E64',
    backgroundError: '#5D1D1D',
    error: '#EE8C8C',
    linkBackgroundHover: 'rgba(255, 255, 255, 0.08);',
  },
};
function AppThemeProvider({ children }) {
  const { state } = useSearch();
  const { currentTheme } = state;

  return <ThemeProvider theme={theme[currentTheme]}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
