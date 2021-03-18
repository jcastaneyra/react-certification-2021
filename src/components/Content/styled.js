import styled from 'styled-components';

const Container = styled.div`
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0px 50px;
`;

const VideoScreenshotContainer = styled.div`
  width: 20%;

  @media screen and (max-width: 1400px) {
    width: 30%;
  }

  @media screen and (max-width: 1024px) {
    width: 40%;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const Styled = { Container, VideoScreenshotContainer };
export default Styled;
