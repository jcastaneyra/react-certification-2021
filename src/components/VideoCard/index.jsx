import React from 'react';
import Styled from './styled';

const VideoCard = ({ title, description, url, to, onClick }) => (
  <Styled.VideoLink to={to}>
    <Styled.Container onClick={onClick} data-testid="videoCard">
      <Styled.Img img={url} />
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>
        <p>{description}</p>
      </Styled.Description>
    </Styled.Container>
  </Styled.VideoLink>
);

export default VideoCard;
