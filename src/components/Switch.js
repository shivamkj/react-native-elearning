import React from 'react';
import {StyleSheet} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

const Switch = ({value, onChange}) => (
  <ToggleSwitch
    isOn={value}
    onColor="#2DD066"
    offColor="#fff"
    size="medium"
    onToggle={onChange}
    trackOffStyle={styles.style}
  />
);

const styles = StyleSheet.create({
  style: {
    borderColor: '#EFEFEF',
    borderWidth: 2,
    margin: 0,
  },
});

export default Switch;
