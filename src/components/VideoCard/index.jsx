import React from 'react';
import Styled from './styled';

const VideoCard = ({ title, description, url, onClick }) => (
  <Styled.Container onClick={onClick}>
    <Styled.Img img={url} />
    <Styled.Title>{title}</Styled.Title>
    <Styled.Description>
      <p>{description}</p>
    </Styled.Description>
  </Styled.Container>
);

export default VideoCard;