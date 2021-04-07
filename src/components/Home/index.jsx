import React, { useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Styled from './styled';
import Header from '../Header';
import VideoList from '../VideoList';
import VideoDetail from '../VideoDetail';
import { useSearch } from '../../state/SearchProvider';
import Login from '../Login';
import SideMenu from '../SideMenu';
import { youtubeList } from '../../apis/youtube';

const Home = () => {
  const { state, dispatch } = useSearch();
  const { showLogin, firstLoad, videos, favoriteVideos, currentSession } = state;

  const callYoutubeList = useCallback(async () => {
    dispatch({type: 'START_LOADING'});
    const [result, error] = await youtubeList();
    if (!error) {
      dispatch({
        type: 'ADD_VIDEOS',
        payload: {
          videos: result.items,
        },
      });
    }
    dispatch({type: 'STOP_LOADING'});
  }, [dispatch]);

  React.useEffect(() => {
    if (firstLoad) {
      callYoutubeList();
    }
  }, [firstLoad, callYoutubeList]);
   
  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route {...rest} render={() =>
          currentSession ? (children) :
          (<Redirect to={{ pathname: '/' }} />)
        }
      />
    )
  }

  return (
    <Styled.Container>
      <Header />
      <SideMenu />
      {showLogin ? <Login /> : ''}
      <Switch>
        <Route exact path="/">
          <VideoList videos={videos}/>
        </Route>
        <Route path="/player/:videoId">
          <VideoDetail />
        </Route>
        <PrivateRoute path="/favorites">
          <VideoList videos={favoriteVideos} emptyMessage="You haven't added any videos to your favorites yet"/>
        </PrivateRoute>
      </Switch>
    </Styled.Container>
  );
};

export default Home;
