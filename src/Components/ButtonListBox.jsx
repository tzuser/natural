import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  overflow: hidden;
`;
const ListBox = styled.div`
  margin: 0 -10px;
`;
const ButtonListBox = ({ children }) => (
  <Box>
    <ListBox>{children}</ListBox>
  </Box>
);
export default ButtonListBox;
