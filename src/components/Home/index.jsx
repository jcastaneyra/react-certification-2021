import React from 'react';
import Header from '../Header';
import Content from '../Content';
import VideoDetail from '../VideoDetail';
import { useSearch } from '../../state/SearchProvider';

const Home = () => {
  const { state } = useSearch();
  const { selectedVideo } = state;

  return (
    <div>
      <Header />
      {selectedVideo === null ? <Content /> : <VideoDetail />}
    </div>
  );
};

export default Home;
