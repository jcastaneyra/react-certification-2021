import React, { useCallback } from 'react';
import VideoCard from '../VideoCard';
import Styled from './styled';
import { useSearch } from '../../state/SearchProvider';
import { youtubeList } from '../../apis/youtube';
import LoadingSpinner from '../LoadingSpinner';

const Content = () => {
  const { state, dispatch } = useSearch();
  const { videos, firstLoad } = state;

  const callYoutubeList = useCallback(async () => {
    const [result, error] = await youtubeList();
    if (!error) {
      dispatch({
        type: 'ADD_VIDEOS',
        payload: {
          videos: result,
        },
      });
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (firstLoad) {
      callYoutubeList();
    }
  }, [firstLoad, callYoutubeList]);

  const showVideoDetail = (item) => {
    dispatch({
      type: 'SET_SELECTED_VIDEO',
      payload: {
        selectedVideo: item,
      },
    });
  };

  return (
    <Styled.Container data-testid="content">
      {videos.length === 0 ? (
        <LoadingSpinner />
      ) : (
        videos
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
      )}
    </Styled.Container>
  );
};

export default Content;
