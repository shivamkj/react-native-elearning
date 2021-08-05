import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {colors} from '../config';

const ScreenContainer = ({children, style}) => (
  <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default ScreenContainer;
