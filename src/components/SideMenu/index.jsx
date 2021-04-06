import React, { useRef } from 'react';
import { useSearch } from '../../state/SearchProvider';
import Styled from './styled';

const SideMenu = () => {
  const { state, dispatch } = useSearch();
  const { currentSession, showMenu } = state;

  const node = useRef();
  console.log('Showing SideMenu');

  const closeMenu = () => {
    dispatch({
      type: 'CLOSE_MENU',
    });
  };

  return (
    <>
      <Styled.Modal open={showMenu} onClick={closeMenu} />
      <Styled.Container ref={node} open={showMenu} onClick={(e) => e.stopPropagation()}>
        <Styled.MenuLink onClick={closeMenu} to="/">
          Home
        </Styled.MenuLink>
        {currentSession ? <Styled.MenuLink onClick={closeMenu} to="/favorites" /> : ''}
      </Styled.Container>
    </>
  );
};

export default SideMenu;
