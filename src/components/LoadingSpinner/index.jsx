import React from 'react';
import Styled from './styled';

const LoadingSpinner = () => {
  return (
    <Styled.Container>
      <Styled.Spinner viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="2" />
      </Styled.Spinner>
    </Styled.Container>
  );
};

export default LoadingSpinner;
