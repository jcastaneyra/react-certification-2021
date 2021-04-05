import React, { useCallback } from 'react';
import Styled from './styled';
import VideoCard from '../VideoCard';
import { useSearch } from '../../state/SearchProvider';
import { useParams } from 'react-router-dom';
import { youtubeGetVideoByID, youtubeRelatedVideos } from '../../apis/youtube';
import LoadingSpinner from '../LoadingSpinner';

const VideoDetail = () => {
  const { state, dispatch } = useSearch();
  const { videos, selectedVideo } = state;
  const { videoId } = useParams();

  const callSearchById = useCallback(
    async (videoIdParam) => {
        const [video, error] = await youtubeGetVideoByID(videoIdParam);
        if (!error) {
          dispatch({
            type: 'SET_SELECTED_VIDEO',
            payload: {
              selectedVideo: video,
            },
          });
        }
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
              videos: result,
            },
          });
        }
    },
    [dispatch]
  );

  React.useEffect(() => {
    if(!selectedVideo) {
      callSearchById(videoId); 
    }
  }, [selectedVideo, callSearchById, videoId ]);

  React.useEffect(() => {
    if(videos.length === 0) {
      callSearchByRelated(videoId);
    }
  }, [videos, callSearchByRelated, videoId]);

  const showVideoDetail = (item) => {
    dispatch({
      type: 'SET_SELECTED_VIDEO',
      payload: {
        selectedVideo: item,
      },
    });
  };

  return (
    <Styled.Container data-testid="videoDetail">
      {selectedVideo ? (
        <>
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
            <Styled.Description>
              <p>{selectedVideo.snippet.description}</p>
            </Styled.Description>
          </Styled.VideoContainer>
          <Styled.Side>
            {videos
              .map((item) => (
                item.id.videoId ? {...item, id: item.id.videoId} : {...item}
              ))
              .filter(
                (item) =>
                  item.snippet &&
                  item.id !== selectedVideo.id
              )
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
      ) : (
        <LoadingSpinner />
      )}
    </Styled.Container>
  );
};

export default VideoDetail;
