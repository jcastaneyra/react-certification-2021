import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(props) => props.theme.contentBackgroundColor};
  height: 100%;
`;

const Styled = { Container };
export default Styled;
