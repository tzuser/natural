import React from 'react';
import SelectButton from 'com_/SelectButton';
import { connect } from 'public_/Context';
import { Consumer } from 'context_/Language';

@connect(
  Consumer,
  'lang'
)
class SelectLanguageBtn extends React.Component {
  render() {
    let { index, setLanguage, list, isListFetching } = this.props.lang;
    if (isListFetching) return 'loading';
    return (
      <SelectButton data={list} index={index} handleSelect={setLanguage} />
    );
  }
}

export default SelectLanguageBtn;
