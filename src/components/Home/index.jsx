import React from 'react';
import Header from '../Header';
import Content from '../Content';
import VideoDetail from '../VideoDetail';
import SearchProvider from '../../state/SearchProvider';

const Home = () => {
  const [current, setCurrent] = React.useState(null);

  return (
    <div>
      <SearchProvider>
        <Header/>
      {current === null ? (
        <Content setCurrent={setCurrent} />
      ) : (
        <VideoDetail current={current} setCurrent={setCurrent} />
      )}
      </SearchProvider>
    </div>
  );
};

export default Home;
