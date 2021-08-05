import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BackArrow} from '../assets/icons';
import Text from './Text';

const TopHeader = ({title, onBackPress}) => (
  <View style={styles.container}>
    {onBackPress && (
      <TouchableOpacity onPress={onBackPress} activeOpacity={0}>
        <BackArrow color="#000000" />
      </TouchableOpacity>
    )}
    <Text style={styles.title} numberOfLines={1}>
      {title}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    margin: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Bold-700',
    marginTop: 18,
  },
});

export default TopHeader;
