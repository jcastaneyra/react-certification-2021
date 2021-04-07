import styled from 'styled-components';

const Container = styled.div`
  border: ${(props) => props.theme.borderCard};
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.backgroundCard};
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
  color: ${(props) => props.theme.titleColor};
`;

const Description = styled.div`
  font-size: 0.95rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  padding: 15px;
  color: ${(props) => props.theme.descColor};
`;

const Styled = { Container, Img, Title, Description };
export default Styled;
