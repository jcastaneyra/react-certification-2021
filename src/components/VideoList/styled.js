import styled from 'styled-components';

const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 50px;
`;

const VideoScreenshotContainer = styled.div`
  width: 20%;

  @media screen and (max-width: 1400px) {
    width: 33%;
  }

  @media screen and (max-width: 1024px) {
    width: 50%;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Error = styled.div`
  margin: 20px 20px;
  padding: 10px;
  background: ${(props) => props.theme.backgroundError};
  border: 1px solid #a33a3a;
  color: ${(props) => props.theme.error};
  border-radius: 5px;
  height: 20px;
  width: 100%;
`;

const Styled = { Container, VideoScreenshotContainer, Error };
export default Styled;
