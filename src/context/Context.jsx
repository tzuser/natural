import React from 'react';
//获取连接
const getConnect = WrappedConsumer => name => WrappedComponent => props => (
  <WrappedConsumer>
    {context => <WrappedComponent {...props} {...{ [name]: context }} />}
  </WrappedConsumer>
);

//获取提供器
export const getContext = (name, data, initState) => {
  let Context = React.createContext();
  class Provider extends React.Component {
    constructor(props) {
      super(props);
      this.newState = {};
      this.newAction = {};
      let _self = this;
      for (let [key, item] of Object.entries(data)) {
        //如果是函数则筛选到newAction里
        if (typeof item === 'function' && key != 'init') {
          data[key] = this.newAction[key] = item.bind(this);
        }
      }
      for (let [key, item] of Object.entries(data.state)) {
        this.newState[key] = item;
      }
      this.state = Object.assign(this.newState, initState);
    }
    componentDidMount() {
      if (data.init) data.init.apply(data);
    }
    componentWillUnmount() {
      console.log('unMount');
    }
    setState(updater, callback) {
      super.setState(updater, () => {
        data.state = this.state;
        if (callback) callback();
      });
    }

    setStateAsync(updater) {
      return new Promise((resolve, reject) => {
        super.setState(updater, () => {
          data.state = this.state;
          resolve();
        });
      });
    }
    render() {
      return (
        <Context.Provider value={{ ...this.state, ...this.newAction }}>
          {this.props.children}
        </Context.Provider>
      );
    }
  }
  const Consumer = Context.Consumer;
  const connect = getConnect(Consumer)(name);
  return { Provider, Consumer, connect, context: data };
};
