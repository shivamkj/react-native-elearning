import React from 'react';
import CheckBox from '@react-native-community/checkbox';

const Checkbox = ({state, onChange}) => (
  <CheckBox
    disabled={false}
    value={state}
    tintColors={{true: '#44AF69'}}
    boxType="square"
    onCheckColor="#ffffff"
    onFillColor="#44AF69"
    onTintColor="#44AF69"
    onValueChange={onChange}
  />
);

export default Checkbox;
