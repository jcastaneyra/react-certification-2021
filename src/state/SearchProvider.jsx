import React, { createContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);

  return (
    <SearchContext.Provider
      value={{ search, setSearch, items, setItems }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext };
export default SearchProvider;
