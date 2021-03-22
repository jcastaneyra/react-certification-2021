import React, { useCallback } from 'react';
import Styled from './styled';
import youtubeSearch from '../../apis/youtube';
import useDebounce from '../../hooks/useDebounce';
import { useSearch } from '../../state/SearchProvider';

const Header = () => {
  const { dispatch } = useSearch();
  const [search, setSearch] = React.useState('');
  const debouncedSearchTerm = useDebounce(search, 500);

  const callSearch = useCallback(async (searchTerm) => {
    const [videos, error] = await youtubeSearch(searchTerm);
    if (!error) {
      dispatch({
              type: 'ADD_VIDEOS',
              payload: {
                videos: videos,
              },
            });
    }
  }, [dispatch]); 
  
  React.useEffect(() => {
    callSearch(debouncedSearchTerm)
  }, [debouncedSearchTerm, callSearch]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(search)
  };

  return (
    <Styled.Nav>
      <Styled.NavContainer>
        <Styled.NavMenu>
          <Styled.Icon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </Styled.Icon>
          <Styled.NavSearch
            type="text"
            placeholder="Search ..."
            value={search}
            onChange={handleSearch}
          />
        </Styled.NavMenu>

        <Styled.Icon
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </Styled.Icon>
      </Styled.NavContainer>
    </Styled.Nav>
  );
};

export default Header;
