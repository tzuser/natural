import React from 'react';
import SelectButton from 'com_/SelectButton';
import { Language } from 'context_/Language';

class SelectLanguageBtn extends React.Component {
  render() {
    let { index, setLanguage, list, isListFetching } = this.props.lang;
    if (isListFetching) return 'loading';
    return (
      <SelectButton data={list} index={index} handleSelect={setLanguage} />
    );
  }
}

export default Language.connect(SelectLanguageBtn);
