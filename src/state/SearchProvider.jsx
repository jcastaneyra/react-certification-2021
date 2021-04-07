import React, { createContext, useContext, useReducer } from 'react';
import reducer from './SearchReducer';

const youtubeSession = JSON.parse(localStorage.getItem('youtubeSession'));

let initState = {
  videos: [],
  selectedVideo: null,
  firstLoad: true,
  loading: false,
  currentTheme: 'light',
  showLogin: false,
  showMenu: false,
  currentSession: null,
  favoriteVideos: [],
};

if (youtubeSession) {
  const sessionFavorites = JSON.parse(
    localStorage.getItem(`${youtubeSession.currentSession.id}#favoriteVideos`)
  );
  const sessionTheme = JSON.parse(
    localStorage.getItem(`${youtubeSession.currentSession.id}#theme`)
  );
  initState = {
    ...initState,
    currentSession: youtubeSession.currentSession,
    favoriteVideos: sessionFavorites ? sessionFavorites.favoriteVideos : [],
    currentTheme: sessionTheme || 'light',
  };
}

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
