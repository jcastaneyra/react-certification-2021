import React, { useState } from 'react';
import Styled from './styled';
import { useSearch } from '../../state/SearchProvider';
import loginApi from '../../apis/login';

const Login = () => {
  const { dispatch } = useSearch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);

  const closeLogin = () => {
    dispatch({
      type: 'CLOSE_LOGIN',
    });
  };

  const updateUsername = (event) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  const updatePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setAuthError(false);
      const currentSession = await loginApi(username, password);
      console.log(currentSession);
      dispatch({
        type: 'SET_CURRENT_SESSION',
        payload: {
          currentSession,
        },
      });
      closeLogin();
    } catch (error) {
      setAuthError(true);
    }
  };

  return (
    <Styled.Modal onClick={closeLogin}>
      <Styled.Container onClick={(e) => e.stopPropagation()}>
        <Styled.Header>Login</Styled.Header>
        {authError ? <Styled.Error> Username or password invalid!!! </Styled.Error> : ''}
        <Styled.Form onSubmit={handleLogin}>
          <Styled.Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={updateUsername}
            autoFocus
          />
          <Styled.Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <Styled.Buttons>
            <Styled.Button onClick={closeLogin} href="#">
              Cancel
            </Styled.Button>
            <Styled.SubmitButton type="submit" onClick={handleLogin} href="#">
              Login
            </Styled.SubmitButton>
          </Styled.Buttons>
        </Styled.Form>
      </Styled.Container>
    </Styled.Modal>
  );
};

export default Login;
