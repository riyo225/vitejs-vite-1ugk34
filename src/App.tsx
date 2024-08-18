import React from 'react';
import { HelloWorld } from './HelloWorld';
import styled from 'styled-components';

const SDiv = styled.div`
  text-align: center;
  padding: 20px;
  color: #c3bfd8;
  
`;

export const App: React.FC = () => {
  return (
    <SDiv>
      <HelloWorld />
    </SDiv>
  );
};
