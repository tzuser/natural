import React from 'react';
import FlyoutWrapped from 'com_/FlyoutWrapped';
import ButtonListBox from 'com_/ButtonListBox';
import IconButton from 'com_/IconButton';
import { Button } from 'gestalt';
const Item = ({ data, handleSelect, onClose }) => {
  return (
    <ButtonListBox>
      {data.map((item, key) => (
        <Button
          key={key}
          color="white"
          text={item.name}
          onClick={() => {
            handleSelect(key, item);
            onClose();
          }}
        />
      ))}
    </ButtonListBox>
  );
};
class SelectButton extends React.Component {
  render() {
    let { data, index, handleSelect } = this.props;
    let current = data[index];
    return (
      <FlyoutWrapped
        size="xs"
        content={onClose => (
          <Item onClose={onClose} handleSelect={handleSelect} data={data} />
        )}
      >
        {onOpen => {
          return (
            <IconButton text={current.name} icon="globe" onClick={onOpen} />
          );
        }}
      </FlyoutWrapped>
    );
  }
}

export default SelectButton;
