import React, { createContext, useState } from 'react';

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);

  return (
    <SearchContext.Provider
      values={{ search: search, setSearch: setSearch, items: items, setItems: setItems }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext };
export default SearchProvider;
