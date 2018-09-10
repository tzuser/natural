import React from 'react';
import { Box, Icon, IconButton, Text, Button, Divider } from 'gestalt';
import SelectLanguageBtn from 'com_/SelectLanguageBtn.jsx';
import T from 'com_/T.jsx';
import styled from 'styled-components';

const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', open: false };
  }
  handleClick() {
    this.setState(() => ({ open: !this.state.open }));
  }
  handleDismiss() {
    this.setState(() => ({ open: false }));
  }
  componentDidMount() {
    console.log('Header Did Mount');
  }

  render() {
    return (
      <div style={{ height: 68 }}>
        <HeaderBox>
          <Box
            color="white"
            padding={3}
            display="flex"
            direction="row"
            alignItems="center"
          >
            <Box padding={3}>
              <Text bold color="red">
                <T n="webName" test="TangZuo" />
              </Text>
            </Box>
            <Box flex="grow" paddingX={2} />
            <Box paddingX={2}>
              <T n="home">{text => <Button text={text} color="white" />}</T>
            </Box>
            <Box paddingX={2}>
              <T n="natural">{text => <Button text={text} color="white" />}</T>
            </Box>
            <Box paddingX={2}>
              <T n="tcmt">{text => <Button text={text} color="white" />}</T>
            </Box>
            <Box paddingX={2}>
              <SelectLanguageBtn />
            </Box>
            <Box paddingX={2}>
              <IconButton
                accessibilityLabel="Profile"
                icon="person"
                size="md"
              />
            </Box>
          </Box>
          <Divider />
        </HeaderBox>
      </div>
    );
  }
}

export default Header;
