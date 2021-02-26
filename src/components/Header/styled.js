import styled from 'styled-components';

const Nav = styled.div`
  background-color: #1c5476;
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
  background: #226691;
  font-size: 0.8rem;
  width: 200px;

  ::placeholder {
    color: #83bfe2;
    opacity: 1;
  }
`;

const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;

const Styled = { Nav, NavContainer, NavMenu, NavSearch, Icon };
export default Styled;
