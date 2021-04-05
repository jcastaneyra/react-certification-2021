import React, { createContext, useContext, useReducer } from 'react';
import reducer from './SearchReducer';

const initState = {
  videos: [],
  selectedVideo: null,
  firstLoad: true,
  currentTheme: 'light',
  showLogin: false,
  currentSession: null,
};

const SearchContext = createContext();

const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Cant's use "useSearchContext" without a SearchProvider!`);
  }
  return context;
};

const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export { useSearch };
export default SearchProvider;
