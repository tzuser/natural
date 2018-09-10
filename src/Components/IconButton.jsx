import React from 'react';
import { Box, Icon, Text } from 'gestalt';
import styled from 'styled-components';

const colorData = {
  light: {
    bg: `
      background-color: #e6a34f;
      &:hover {
        background-color: #d6923e;
      }
    `,
    text: 'white',
  },
  white: {
    bg: `
      background-color: white;
      &:hover {
        background-color: #f1f1f1;
      }
    `,
    text: 'darkGray',
  },
};

const ButtonBox = styled.div`
  cursor: pointer;
  border-radius: 999px;
  ${p => colorData[p.color].bg} letter-spacing: normal;
  word-spacing: normal;
  box-sizing: border-box;
  &:focus {
    box-shadow: 0 0 0 4px rgba(0, 132, 255, 0.5);
    outline: 0;
  }
`;
class IconButton extends React.Component {
  render() {
    const { color = 'white', icon, text, onClick } = this.props;
    const textColor = colorData[color].text;
    return (
      <ButtonBox tabIndex="0" color={color} onClick={onClick}>
        <Box alignItems="center" display="flex" paddingX={3} paddingY={2}>
          <Box marginRight={1} padding={1}>
            <Icon icon={icon} accessibilityLabel="Pin" color={textColor} />
          </Box>
          <Text align="center" bold color={textColor}>
            {text}
          </Text>
        </Box>
      </ButtonBox>
    );
  }
}

export default IconButton;
