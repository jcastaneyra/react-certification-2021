import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ open }) => (open ? 2 : -1)};
`;

const Container = styled.div`
  top: 0;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 4;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;
  background: ${({ open }) => (open ? 'rgba(0, 0, 0, 0.5)' : 'transparent')};
  background-color: ${(props) => props.theme.backgroundCard};
  left: 0;
  right: auto;
  transition: all 0.3s linear;
  transform-origin: 1px;
  width: 250px;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
`;

const MenuLink = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  color: ${(props) => props.theme.titleColor};
  padding: 12px 16px;
  text-align: left;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.linkBackgroundHover};
    border-radius: 5px;
  }
`;

const Styled = {
  Modal,
  Container,
  MenuLink,
};

export default Styled;
