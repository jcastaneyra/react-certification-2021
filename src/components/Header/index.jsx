import React, { useCallback } from 'react';
import Styled from './styled';
import { youtubeSearch } from '../../apis/youtube';
import { useSearch } from '../../state/SearchProvider';

const Header = () => {
  const { state, dispatch } = useSearch();
  const [search, setSearch] = React.useState('');
  const { currentTheme } = state;

  const callSearch = useCallback(
    async (searchTerm) => {
      const [videos, error] = await youtubeSearch(searchTerm);
      if (!error) {
        dispatch({
          type: 'ADD_VIDEOS',
          payload: {
            videos,
          },
        });
      }
    },
    [dispatch]
  );

  const handleSearch = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      console.log('calling search with', search);
      callSearch(search);
    }
  };

  const updateSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(search);
  };

  const toggleTheme = () => {
    dispatch({
      type: 'TOGGLE_THEME',
    });
  };

  const showLogin = () => {
    dispatch({
      type: 'SHOW_LOGIN',
    });
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
            onChange={updateSearch}
            onKeyUp={handleSearch}
          />
        </Styled.NavMenu>

        <Styled.Controls>
          <Styled.IconTheme
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleTheme}
          >
            {currentTheme === 'light' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            )}
          </Styled.IconTheme>
          <Styled.DropdownIcon>
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
            <Styled.Dropdown>
              <Styled.Submenu onClick={showLogin}>Login</Styled.Submenu>
            </Styled.Dropdown>
          </Styled.DropdownIcon>
        </Styled.Controls>
      </Styled.NavContainer>
    </Styled.Nav>
  );
};

export default Header;
