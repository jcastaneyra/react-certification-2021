import React from 'react';
import VideoCard from '../VideoCard';
import Styled from './styled';

const Content = ({ items }) => (
  <Styled.Container>
    {items
      .filter((item) => item.id.kind === 'youtube#video')
      .map((item) => (
        <VideoCard
          key={item.id.videoId}
          title={item.snippet.title}
          description={item.snippet.description}
          url={item.snippet.thumbnails.medium.url}
        />
      ))}
  </Styled.Container>
);

export default Content;
