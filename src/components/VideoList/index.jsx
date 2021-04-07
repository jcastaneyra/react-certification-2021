import React from 'react';
import VideoCard from '../VideoCard';
import Styled from './styled';
import { useSearch } from '../../state/SearchProvider';
import LoadingSpinner from '../LoadingSpinner';

const VideoList = ({ videos, emptyMessage = 'No result videos' }) => {
  const { state, dispatch } = useSearch();
  const { loading } = state;

  const showVideoDetail = (item) => {
    dispatch({
      type: 'SET_SELECTED_VIDEO',
      payload: {
        selectedVideo: item,
      },
    });
  };

  const showVideoList = (videoList) => {
    return (
      videoList.length === 0 ? (
        <Styled.Error> {emptyMessage} </Styled.Error>
      ) : (
        videoList
          .filter((item) => item.snippet)
          .map((item) =>
            item.id.videoId ? { ...item, id: item.id.videoId } : { ...item }
          )
          .map((item) => (
            <Styled.VideoScreenshotContainer key={item.id}>
              <VideoCard
                to={`/player/${item.id}`}
                onClick={() => showVideoDetail(item)}
                title={item.snippet.title}
                description={item.snippet.description}
                url={item.snippet.thumbnails.medium.url}
              />
            </Styled.VideoScreenshotContainer>
          ))
      )
    )
  }

  return (
    <Styled.Container data-testid="content">
      {/* eslint-disable no-nested-ternary */}
      {loading ? (
        <LoadingSpinner />
      ) : 
        showVideoList(videos)
      }
    </Styled.Container>
  );
};

export default VideoList;
