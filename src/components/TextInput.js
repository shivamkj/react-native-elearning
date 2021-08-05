import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from '../config';

const AppTextInput = ({widths = '100%', ...otherProps}) => (
  <View style={[styles.container, {width: widths}]}>
    <TextInput style={styles.input} {...otherProps} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.sectionBackground,
    borderRadius: 4,
    flexDirection: 'row',
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    width: '100%',
    fontFamily: 'SemiBold-600',
    fontSize: 14,
    color: colors.subText,
  },
});

export default AppTextInput;
