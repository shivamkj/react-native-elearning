import React from 'react';
import {View} from 'react-native';
import SkeleletonPlaceholder from 'react-native-skeleton-placeholder';

const Explore = () => (
  <SkeleletonPlaceholder>
    <View style={{height: 200, width: '93%', margin: 12}} />
    <View style={{height: 30, width: '50%', margin: 12}} />
    <View style={{flexDirection: 'row'}}>
      <View style={{height: 200, width: 180, margin: 12}} />
      <View style={{height: 200, width: 180, margin: 12}} />
    </View>
    <View style={{height: 30, width: '50%', margin: 12}} />
    <View style={{flexDirection: 'row'}}>
      <View style={{height: 200, width: 180, margin: 12}} />
      <View style={{height: 200, width: 180, margin: 12}} />
    </View>
  </SkeleletonPlaceholder>
);

export default Explore;
