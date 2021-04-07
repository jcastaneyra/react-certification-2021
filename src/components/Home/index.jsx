import React from 'react';
import Styled from './styled';
import Header from '../Header';
import VideoList from '../VideoList';
import VideoDetail from '../VideoDetail';
import { useSearch } from '../../state/SearchProvider';

const Home = () => {
  const { state } = useSearch();
  const { selectedVideo } = state;

  return (
    <Styled.Container>
      <Header />
      {selectedVideo === null ? <VideoList /> : <VideoDetail />}
    </Styled.Container>
  );
};

export default Home;
