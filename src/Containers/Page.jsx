import React from 'react';
import Header from 'com_/Header';

class Page extends React.Component {
  render() {
    let { children } = this.props;
    return (
      <React.Fragment>
        <Header />
        {children}
      </React.Fragment>
    );
  }
}

export default Page;
