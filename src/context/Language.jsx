import React from 'react';
import autobind from 'autobind-decorator';

//语言切换
const LanguageContext = React.createContext();

class Language extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.init();
  }
  state = {
    list: [],
    index: 0,
    isFetching: true,
    isListFetching: true,
  };

  @autobind
  async getList() {
    this.setState({ isListFetching: true });
    let res = await fetch(`/config.json`);
    let json = await res.json();
    this.setState({ isListFetching: false, list: json });
  }

  @autobind
  async setLanguage(index) {
    this.setState({ isFetching: true });
    let item = this.state.list[index];
    let res = await fetch(`/${item.language}.json`);
    let json = await res.json();
    this.setState({ isFetching: false, index, ...item, data: json });
    window.localStorage.setItem('languageIndex', index);
  }

  async init() {
    await this.getList();
    let initIndex = window.localStorage.getItem('languageIndex') || 0;
    await this.setLanguage(initIndex);
  }

  render() {
    const { children } = this.props;
    return (
      <LanguageContext.Provider
        value={{ ...this.state, setLanguage: this.setLanguage }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }
}

export const Consumer = LanguageContext.Consumer;

export default Language;
