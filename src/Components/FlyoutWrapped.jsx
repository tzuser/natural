import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose, withApollo } from 'react-apollo';
import postQuery from 'gql_/post.gql';
import 'gestalt/dist/gestalt.css';
import {
  Box,
  Icon,
  IconButton,
  SearchField,
  Text,
  Button,
  Flyout,
} from 'gestalt';

class FlyoutWrapped extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', open: false };
  }
  handleClick(e) {
    this.setState(() => ({ open: true }));
  }
  handleDismiss() {
    this.setState(() => ({ open: false }));
  }

  render() {
    let { children, content, btn, ...other } = this.props;
    let childrenElement = children(this.handleClick.bind(this));
    let newChildren = React.cloneElement(childrenElement, {
      accessibilityExpanded: !!this.state.open,
      accessibilityHaspopup: true,
    });
    return (
      <div
        ref={c => {
          this.anchor = c;
        }}
      >
        {newChildren}
        {this.state.open && (
          <Flyout
            anchor={this.anchor}
            idealDirection="down"
            onDismiss={this.handleDismiss.bind(this)}
            size="md"
            {...other}
          >
            {content(this.handleDismiss.bind(this))}
          </Flyout>
        )}
      </div>
    );
  }
}

export default FlyoutWrapped;
