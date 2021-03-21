import React from 'react';
import VideoCard from '../VideoCard';
import Styled from './styled';
import { useSearch } from '../../state/SearchProvider'

const Content = () => {
  const { state, dispatch } = useSearch();
  const { videos } = state;

  const showVideoDetail = (item) => {
    dispatch({
        type: "SET_SELECTED_VIDEO",
        payload: {
          selectedVideo: item,
        }
    })
  };

  return (
    <Styled.Container>
      {videos
        .filter((item) => item.id.kind === 'youtube#video')
        .map((item) => (
          <Styled.VideoScreenshotContainer key={item.id.videoId}>
            <VideoCard
              onClick={() => showVideoDetail(item)}
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
