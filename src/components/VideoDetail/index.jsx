import React from 'react';
import Styled from './styled';
import VideoCard from '../VideoCard';
import { useSearch } from '../../state/SearchProvider';

const VideoDetail = () => {
  const { state, dispatch } = useSearch();
  const { videos, selectedVideo } = state;
  const showVideoDetail = (item) => {
    dispatch({
      type: 'SET_SELECTED_VIDEO',
      payload: {
        selectedVideo: item,
      },
    });
  };

  return (
    <Styled.Container>
      <Styled.VideoContainer>
        <Styled.VideoPlayerContainer>
          <Styled.VideoPlayer
            height="315"
            width="560"
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="selectedVideo.snippet.title"
          />
        </Styled.VideoPlayerContainer>
        <Styled.Title>{selectedVideo.snippet.title}</Styled.Title>
        <Styled.Description>
          <p>{selectedVideo.snippet.description}</p>
        </Styled.Description>
      </Styled.VideoContainer>
      <Styled.Side>
        {videos
          .filter(
            (item) =>
              item.id.kind === 'youtube#video' &&
              item.id.videoId !== selectedVideo.id.videoId
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
