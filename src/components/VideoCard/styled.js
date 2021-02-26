import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin: 10px;
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

const Styled = { Container, Img, Title, Description };
export default Styled;
