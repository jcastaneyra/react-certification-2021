import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const VideoContainer = styled.div`
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin: 30px;
  width: 70%;
  height: 70%;
  flex: 70%;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const VideoPlayerContainer = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
`;
const VideoPlayer = styled.iframe`
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Side = styled.div`
  margin-top: 20px;
  flex: 20%;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;
const VideoScreenshotContainer = styled.div`
  ${'' /* width: 20%; */}

  @media screen and (max-width: 1219px) {
    ${'' /* width: 30%; */}
    width: 40%;
  }

  @media screen and (max-width: 1024px) {
    width: 40%;
  }

  @media screen and (max-width: 600px) {
    ${'' /* width: 80%; */}
    width: 40%;
  }
`;

const Img = styled.div`
  height: 140px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.img});
`;

const Title = styled.div`
  font-size: 1.25rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  letter-spacing: 0.0075em;
  margin: 5px 15px;
`;

const Description = styled.div`
  font-size: 0.95rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  padding: 15px;
  color: rgba(0, 0, 0, 0.54);
`;

const Styled = {
  Container,
  VideoContainer,
  Img,
  Title,
  Description,
  VideoPlayerContainer,
  VideoPlayer,
  Side,
  VideoScreenshotContainer,
};
export default Styled;
