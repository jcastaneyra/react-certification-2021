import styled from 'styled-components';

const Nav = styled.div`
  background-color: ${(props) => props.theme.headerBackgroundColor};
  color: #fff;
  padding: 0px 30px;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;

const NavSearch = styled.input`
  padding: 0.5em;
  margin-left: 2.5em;
  border: none;
  border-radius: 4px;
  color: #eaf4fa;
  background: ${(props) => props.theme.searchBackgroundColor};
  font-size: 0.8rem;
  width: 200px;

  ::placeholder {
    color: ${(props) => props.theme.searchPlaceholder};
    opacity: 1;
  }
`;

const Controls = styled.div`
  margin: 1em;
`;

const Icon = styled.svg`
  width: 24px;
  height: 24px;

  &:hover {
    cursor: pointer;
  }
`;

const IconTheme = styled(Icon)`
  margin-right: 2em;
`;

const NavToggle = styled.div`
  display: block;
  padding: 1rem;
  transition: 250ms ease background-color;
  &:hover {
    cursor: pointer;
    background-color: skyblue;
  }
`;

const Styled = {
  Nav,
  NavContainer,
  NavMenu,
  NavSearch,
  Controls,
  Icon,
  IconTheme,
  NavToggle,
};
export default Styled;
