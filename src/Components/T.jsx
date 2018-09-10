import React from 'react';
import { Language } from 'context_/Language';
const getText = (sourceText, data) => {
  let str = sourceText;
  if (!str) return null;
  for (let [key, item] of Object.entries(data)) {
    let re = new RegExp(`\\$\\{${key}\\}`, 'g');
    str = str.replace(re, item);
  }
  str = str.replace(/\$\{[^\}]*\}/g, '');
  return str;
};

@Language.connect
class T extends React.Component {
  renderFromText(text) {
    let { children } = this.props;
    if (children && typeof children == 'function') {
      return children(text);
    }
    return text;
  }
  render() {
    let { n, lang, children, ...other } = this.props;
    if (lang.isFetching) return this.renderFromText('...');
    let sourceText = lang.data[n];
    let text = getText(sourceText, other);
    return this.renderFromText(text);
  }
}

export default T;
