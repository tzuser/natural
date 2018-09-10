import React from 'react';
import 'gestalt/dist/gestalt.css';
import PageLoading from 'com_/PageLoading';
import Loadable from 'react-loadable';
import { Route, Redirect, withRouter, Switch } from 'react-router-dom';
import Page from 'con_/Page';
import Language from 'context_/Language';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */ './Home'),
  loading: PageLoading,
});

const LoadableLogin = Loadable({
  loader: () => import(/* webpackChunkName: 'Login' */ './Login'),
  loading: PageLoading,
});

const LoadableJoin = Loadable({
  loader: () => import(/* webpackChunkName: 'Join' */ './Join'),
  loading: PageLoading,
});

class Pokedex extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Language>
          <Page>
            <Switch>
              <Route exact path="/" component={LoadableHome} />
              <Route path="/login" component={LoadableLogin} />
              <Route path="/join" component={LoadableJoin} />
            </Switch>
          </Page>
        </Language>
      </React.Fragment>
    );
  }
}

export default Pokedex;
