import React from 'react';
import Header from '../Header';
import Content from '../Content';
import mockedData from '../../youtube-videos-mock.json';

const { items } = mockedData;

const Home = () => {
  return (
    <div>
      <Header />
      <Content items={items} />
    </div>
  );
};

export default Home;
