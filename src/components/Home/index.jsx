import React from 'react';
import { Switch, Route } from 'react-router';
import Styled from './styled';
import Header from '../Header';
import VideoList from '../VideoList';
import VideoDetail from '../VideoDetail';
import { useSearch } from '../../state/SearchProvider';
import Login from '../Login';
import SideMenu from '../SideMenu';

const Home = () => {
  const { state } = useSearch();
  const { showLogin } = state;

  return (
    <Styled.Container>
      <Header />
      <SideMenu />
      {showLogin ? <Login /> : ''}
      <Switch>
        <Route exact path="/">
          <VideoList />
        </Route>
        <Route path="/player/:videoId">
          <VideoDetail />
        </Route>
        <Route path="/favorites">
          <VideoList />
        </Route>
      </Switch>
    </Styled.Container>
  );
};

export default Home;
