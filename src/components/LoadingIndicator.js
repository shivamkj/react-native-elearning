import React from 'react';
import {StyleSheet, View, ActivityIndicator, Modal} from 'react-native';
import Text from './Text';

const LoadingIndicator = () => (
  <Modal transparent={true} animationType={'none'}>
    <View style={styles.overlay}>
      <View style={styles.whiteBox}>
        <ActivityIndicator size="large" color="#000000" />
        <Text style={styles.message}>Loading</Text>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
    zIndex: 99,
  },
  whiteBox: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    paddingHorizontal: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  message: {
    color: 'black',
    fontFamily: 'Bold-700',
  },
});

export default LoadingIndicator;
