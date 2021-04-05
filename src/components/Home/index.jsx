import React from 'react';
import { Switch, Route } from 'react-router';
import Styled from './styled';
import Header from '../Header';
import VideoList from '../VideoList';
import VideoDetail from '../VideoDetail';
import { useSearch } from '../../state/SearchProvider';
import Login from '../Login';

const Home = () => {
  const { state } = useSearch();
  const { showLogin } = state;

  return (
    <Styled.Container>
      <Header />
      { showLogin ? <Login /> : "" }
      <Switch>
        <Route exact path="/">
          <VideoList />
        </Route>
        <Route path="/player/:videoId" >
          <VideoDetail />
        </Route>
      </Switch>
    </Styled.Container>
  );
};

export default Home;
