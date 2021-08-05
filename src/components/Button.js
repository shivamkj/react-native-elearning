import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../config';

const AppButton = ({style, title, onPress, disabled}) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={onPress}
    disabled={disabled}
    activeOpacity={0.9}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryGreen,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    width: '100%',
    alignSelf: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AppButton;
