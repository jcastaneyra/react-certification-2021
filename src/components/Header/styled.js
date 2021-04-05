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
  display: flex;
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

const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: ${(props) => props.theme.backgroundCard};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 2.5rem;
  border-radius: 5px;
`;
const DropdownIcon = styled.div`
  &:hover ${Dropdown} {
    display: block;
  }
`;

const Submenu = styled.a`
  color: ${(props) => props.theme.titleColor};
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.08);
    border-radius: 5px;
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
  Dropdown,
  DropdownIcon,
  Submenu,
};
export default Styled;
