import React from 'react';
import styled from 'styled-components';

const TemplateBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 512px;
  height: 768px;
  margin: 96px auto 32px;

  background-color: #faeef9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.04);
`;

function Template({ children }) {
  return <TemplateBlock>{children}</TemplateBlock>;
}

export default Template;
