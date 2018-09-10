import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose, withApollo } from 'react-apollo';
import postQuery from 'gql_/post.gql';
import 'gestalt/dist/gestalt.css';

import SelectLanguageBtn from 'com_/SelectLanguageBtn';

class Home extends React.Component {
  render() {
    return (
      <div className="w-100 bg-light-gray min-vh-100">
        <img
          style={{ width: '100%' }}
          src="http://img.alicdn.com/tfs/TB1usvYl4rI8KJjy0FpXXb5hVXa-2880-1132.png"
        />
        Hey, there are 0 Pokemons in your Home 20
      </div>
    );
  }
}

export default Home;
