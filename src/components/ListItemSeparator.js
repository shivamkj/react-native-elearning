import React from 'react';
import {StyleSheet, View} from 'react-native';

const ListItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#E4E6EC',
  },
});

export default ListItemSeparator;
