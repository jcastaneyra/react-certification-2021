import styled from 'styled-components';

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
  z-index: 2;
`;

const Container = styled.div`
  width: 500px;
  background-color: ${(props) => props.theme.backgroundCard};
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
`;

const Header = styled.h3`
  margin: 20px 20px;
  color: ${(props) => props.theme.titleColor};
}
`;

const Form = styled.form`
  padding: 0 20px;
}
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 15px 20px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: ${(props) => props.theme.contentBackgroundColor};
}
`;

const Buttons = styled.div`
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: right;
}
`;

const Button = styled.a`
  padding: 10px;
  text-decoration: none;
  color: ${(props) => props.theme.button};
  text-transform: uppercase;
  &:hover {
    background-color: ${(props) => props.theme.buttonBackground};
    border-radius: 5px;
  }
}
`;
const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  background: none;
  color: ${(props) => props.theme.button};
  text-transform: uppercase;
  font-size: 17px;
  &:hover {
    background-color: ${(props) => props.theme.buttonBackground};
    border-radius: 5px;
  }
}
`;
const Error = styled.div`
  margin: 20px 20px;
  padding: 10px;
  background: ${(props) => props.theme.backgroundError};
  border: 1px solid #a33a3a;
  color: ${(props) => props.theme.error};
  border-radius: 5px;
`;

const Styled = {
  Modal,
  Container,
  Header,
  Form,
  Input,
  Buttons,
  Button,
  SubmitButton,
  Error,
};

export default Styled;
