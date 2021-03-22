import React from 'react';
import Header from '../Header';
import VideoList from '../VideoList';
import VideoDetail from '../VideoDetail';
import { useSearch } from '../../state/SearchProvider';

const Home = () => {
  const { state } = useSearch();
  const { selectedVideo } = state;

  return (
    <div>
      <Header />
      {selectedVideo === null ? <VideoList /> : <VideoDetail />}
    </div>
  );
};

export default Home;
