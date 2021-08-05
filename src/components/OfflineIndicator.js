import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import Text from './Text';
import colors from '../config/colors';

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.large}>!</Text>
        <Text style={styles.text}>No Internet Connection</Text>
      </SafeAreaView>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.redAccent,
    height: 130,
    width: '100%',
    opacity: 0.9,
    position: 'absolute',
    zIndex: 999,
  },
  text: {
    fontSize: 25,
    color: colors.white,
  },
  large: {
    fontSize: 63,
    color: colors.white,
  },
});

export default OfflineNotice;
