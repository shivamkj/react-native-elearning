import React, {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {CustomText as Text} from '../../../components';
import {colors} from '../../../config';

function InputFeild({error, placeholder, ...otherProps}) {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = () =>
    isFocused
      ? colors.greenAccent
      : error
      ? colors.redAccent
      : colors.sectionBackground;

  return (
    <>
      {error && <Text style={styles.errotText}>{error}</Text>}
      {isFocused && <Text style={styles.feildText}>{placeholder}</Text>}
      <TextInput
        placeholder={placeholder}
        autoCorrect={false}
        style={[styles.input, {borderColor: borderColor()}]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...otherProps}
      />
    </>
  );
}

const styles = StyleSheet.create({
  feildText: {
    fontSize: 12,
    color: colors.subText,
  },
  errotText: {
    fontFamily: 'SemiBold-600',
    fontSize: 13,
    color: colors.redAccent,
  },
  input: {
    flex: 1,
    width: '100%',
    fontFamily: 'SemiBold-600',
    fontSize: 15,
    color: colors.subText,
    backgroundColor: colors.sectionBackground,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginBottom: 10,
    marginTop: 4,
    borderWidth: 1,
  },
});

export default InputFeild;
