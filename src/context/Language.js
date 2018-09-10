import { getContext } from 'context_/Context';
console.log('reload Language file');
export const Language = getContext('lang', {
  state: {
    list: [],
    index: 0,
    isFetching: true,
    isListFetching: true,
  },
  async getList() {
    this.setState({ isListFetching: true });
    let res = await fetch(`/config.json`);
    let json = await res.json();
    this.setState({ isListFetching: false, list: json });
  },
  async setLanguage(index) {
    this.setState({ isFetching: true });
    let item = this.state.list[index];
    let res = await fetch(`/${item.language}.json`);
    let json = await res.json();
    this.setState({ isFetching: false, index, ...item, data: json });
  },
  async init() {
    await this.getList();
    await this.setLanguage(0);
  },
});
