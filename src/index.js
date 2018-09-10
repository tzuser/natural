import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { BrowserRouter, Router } from 'react-router-dom';
import { DB_URL } from 'public_/host.js';

const link = new BatchHttpLink({
  uri: DB_URL,
  credentials: 'include',
  batchInterval: 10,
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

if (process.env.NODE_ENV == 'development') {
  //热加载配置
  if (module.hot) {
    module.hot.accept('./Containers/App.jsx', () => {
      import('./Containers/App.jsx').then(({ default: AppCom }) => {
        render(AppCom);
      });
    });
  }
}
//是否是服务器渲染
const render = (AppCom = App) => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppCom />
      </BrowserRouter>
    </ApolloProvider>,
    document.getElementById('root')
  );
};
render();
