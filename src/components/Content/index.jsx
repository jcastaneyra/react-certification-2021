import React from 'react';
import VideoCard from '../VideoCard';
import Styled from './styled';

const Content = ({ items, setCurrent }) => {
  const showVideoDetail = (item) => {
    console.log(item);
    setCurrent(item);
  };

  return (
    <Styled.Container>
      {items
        .filter((item) => item.id.kind === 'youtube#video')
        .map((item) => (
          <Styled.VideoScreenshotContainer>
            <VideoCard
              onClick={() => showVideoDetail(item)}
              key={item.id.videoId}
              title={item.snippet.title}
              description={item.snippet.description}
              url={item.snippet.thumbnails.medium.url}
            />
          </Styled.VideoScreenshotContainer>
        ))}
    </Styled.Container>
  );
};

export default Content;
