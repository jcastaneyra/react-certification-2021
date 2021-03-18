import React from 'react';
import Styled from './styled';
import VideoCard from '../VideoCard';
import { SearchContext } from '../../state/SearchProvider'

const VideoDetail = ({ current, setCurrent }) => {
  const { items } = React.useContext(SearchContext);
  const showVideoDetail = (item) => {
    console.log(item);
    setCurrent(item);
  };

  return (
    <Styled.Container>
      <Styled.VideoContainer>
        <Styled.VideoPlayerContainer>
          <Styled.VideoPlayer
            height="315"
            width="560"
            src={`https://www.youtube.com/embed/${current.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="current.snippet.title"
          />
        </Styled.VideoPlayerContainer>
        <Styled.Title>{current.snippet.title}</Styled.Title>
        <Styled.Description>
          <p>{current.snippet.description}</p>
        </Styled.Description>
      </Styled.VideoContainer>
      <Styled.Side>
        {items
          .filter(
            (item) =>
              item.id.kind === 'youtube#video' && item.id.videoId !== current.id.videoId
          )
          .map((item) => (
            <Styled.VideoScreenshotContainer key={item.id.videoId}>
              <VideoCard
                onClick={() => showVideoDetail(item)}
                title={item.snippet.title}
                url={item.snippet.thumbnails.medium.url}
              />
            </Styled.VideoScreenshotContainer>
          ))}
      </Styled.Side>
    </Styled.Container>
  );
};

export default VideoDetail;
