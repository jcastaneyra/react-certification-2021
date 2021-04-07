import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.contentBackgroundColor};
  display: block;
  overflow: auto;
`;

const Spinner = styled.svg`
  animation: rotate 2s linear infinite;
  background-color: ${(props) => props.theme.contentBackgroundColor};
  width: 70px;
  height: 70px;
  margin-top: 50px;

  & .path {
    stroke: ${(props) => props.theme.headerBackgroundColor};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
const Styled = { Container, Spinner };
export default Styled;
