import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Styled from './styled';
import VideoCard from '../VideoCard';
import { useSearch } from '../../state/SearchProvider';
import { youtubeGetVideoByID, youtubeRelatedVideos } from '../../apis/youtube';
import LoadingSpinner from '../LoadingSpinner';

const VideoDetail = () => {
  const { state, dispatch } = useSearch();
  const { videos, selectedVideo, loading, currentSession, favoriteVideos } = state;
  const { videoId } = useParams();

  const callSearchById = useCallback(
    async (videoIdParam) => {
      dispatch({ type: 'START_LOADING' });
      const [result, error] = await youtubeGetVideoByID(videoIdParam);
      const [video, ...rest] = result.items;
      console.log(rest);
      if (!error) {
        dispatch({
          type: 'SET_SELECTED_VIDEO',
          payload: {
            selectedVideo: video,
          },
        });
      }
      dispatch({ type: 'STOP_LOADING' });
    },
    [dispatch]
  );

  const callSearchByRelated = useCallback(
    async (videoIdParam) => {
      const [result, error] = await youtubeRelatedVideos(videoIdParam);
      if (!error) {
        dispatch({
          type: 'ADD_VIDEOS',
          payload: {
            videos: result.items,
          },
        });
      }
    },
    [dispatch]
  );

  React.useEffect(() => {
    if (!selectedVideo) {
      callSearchById(videoId);
    }
    if (videos.length === 0) {
      callSearchByRelated(videoId);
    }
  }, [videos, selectedVideo, callSearchById, callSearchByRelated, videoId]);

  const showVideoDetail = (item) => {
    dispatch({
      type: 'SET_SELECTED_VIDEO',
      payload: {
        selectedVideo: item,
      },
    });
  };

  const addToFavorite = useCallback((video) => {
    dispatch({
      type: 'ADD_TO_FAVORITE',
      payload: {
        video,
      },
    });
  }, [dispatch]);

  const removeFromFavorite = useCallback((video) => {
    dispatch({
      type: 'REMOVE_FROM_FAVORITE',
      payload: {
        video,
      },
    });
  }, [dispatch]);

  const getFavoriteButton = () => {
    if (currentSession) {
      const favoriteExist = favoriteVideos.filter((item) => item.id === selectedVideo.id);
      return favoriteExist.length > 0 ? (
        <Styled.FavoriteButton href="#" onClick={() => removeFromFavorite(selectedVideo)}>
          Remove from favorite
        </Styled.FavoriteButton>
      ) : (
        <Styled.FavoriteButton
          href="#"
          onClick={() => addToFavorite(selectedVideo)}
        >
          Add to favorite
        </Styled.FavoriteButton>
      );
    }
  };

  return (
    <Styled.Container data-testid="videoDetail">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {selectedVideo && (
            <Styled.VideoContainer>
              <Styled.VideoPlayerContainer>
                <Styled.VideoPlayer
                  height="315"
                  width="560"
                  src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="selectedVideo.snippet.title"
                />
              </Styled.VideoPlayerContainer>
              <Styled.Title>{selectedVideo.snippet.title}</Styled.Title>
              {getFavoriteButton()}
              <Styled.Description>
                <p>{selectedVideo.snippet.description}</p>
              </Styled.Description>
            </Styled.VideoContainer>
          )}
          <Styled.Side>
            {videos
              .map((item) =>
                item.id.videoId ? { ...item, id: item.id.videoId } : { ...item }
              )
              .filter((item) => item.snippet && item.id !== selectedVideo.id)
              .map((item) => (
                <Styled.VideoScreenshotContainer key={item.id}>
                  <VideoCard
                    to={`/player/${item.id}`}
                    onClick={() => showVideoDetail(item)}
                    title={item.snippet.title}
                    url={item.snippet.thumbnails.medium.url}
                  />
                </Styled.VideoScreenshotContainer>
              ))}
          </Styled.Side>
        </>
      )}
    </Styled.Container>
  );
};

export default VideoDetail;
