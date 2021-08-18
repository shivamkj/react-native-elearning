import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';

const EmptyState = ({title, center = false}) => {
  return (
    <View
      style={
        center == true
          ? {
              height: Dimensions.get('window').height - 180,
              justifyContent: 'center',
            }
          : null
      }>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'SemiBold-600',
    fontSize: 18,
    marginHorizontal: 8,
    textAlign: 'center',
  },
});

export default EmptyState;
