import React from 'react';
import { Box, Icon, Text, Button, Divider } from 'gestalt';
import SelectLanguageBtn from 'com_/SelectLanguageBtn.jsx';
import T from 'com_/T.jsx';
import IconButtonCom from 'com_/IconButton.jsx';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
const HeaderBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;
@withRouter
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
    const {
      history: { push },
    } = this.props;
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
                <T n="webName" />
              </Text>
            </Box>
            <Box flex="grow" paddingX={2} />
            <Box paddingX={2}>
              <T n="home">
                {text => (
                  <Button
                    text={text}
                    color="white"
                    onClick={() => {
                      push('/');
                    }}
                  />
                )}
              </T>
            </Box>
            <Box paddingX={2}>
              <T n="natural">{text => <Button text={text} color="white" />}</T>
            </Box>
            <Box paddingX={2}>
              <T n="tcmt">{text => <Button text={text} color="white" />}</T>
            </Box>

            <Box paddingX={2}>
              <T n="signIn">
                {text => (
                  <IconButtonCom
                    color="light"
                    text={text}
                    icon={'person'}
                    onClick={() => {
                      push('/login');
                    }}
                  />
                )}
              </T>
            </Box>

            <Box paddingX={2}>
              <SelectLanguageBtn />
            </Box>
          </Box>
          <Divider />
        </HeaderBox>
      </div>
    );
  }
}

export default Header;
