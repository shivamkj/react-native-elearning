import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../config/colors';

const CustomText = ({children, style, ...otherProps}) => (
  <Text style={[styles.text, style]} {...otherProps}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    color: colors.dark,
    fontSize: 16,
    fontFamily: 'Assistant',
  },
});

export default CustomText;
