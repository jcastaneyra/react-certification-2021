import React from 'react';
import Styled from './styled';
import youtube from '../../apis/youtube';
import { useSearch } from '../../state/SearchProvider';

const Header = () => {
  const { dispatch } = useSearch();
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    const debounceHandler = setTimeout(() => {
      youtube
        .get('/search', {
          params: {
            q: search,
            maxResults: 25,
          },
        })
        .then((response) => {
          dispatch({
            type: 'ADD_VIDEOS',
            payload: {
              videos: response.data.items,
            },
          });
        });
    }, 1000);
    // cleanUp function
    return () => {
      clearTimeout(debounceHandler);
    };
  }, [search, dispatch]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
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
