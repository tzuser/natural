import React from 'react';
//获取连接
export const connect = (WrappedConsumer, name) => WrappedComponent => props => (
  <WrappedConsumer>
    {context => <WrappedComponent {...props} {...{ [name]: context }} />}
  </WrappedConsumer>
);
