import React from 'react';
import {View} from 'react-native';
import SkeleletonPlaceholder from 'react-native-skeleton-placeholder';

const MyCourses = () => (
  <SkeleletonPlaceholder>
    <View style={{height: 30, width: '50%', margin: 12}} />
    <View style={{height: 120, width: '90%', margin: 12}} />
    <View style={{height: 120, width: '90%', margin: 12}} />
    <View style={{height: 120, width: '90%', margin: 12}} />
    <View style={{height: 120, width: '90%', margin: 12, marginBottom: 200}} />
  </SkeleletonPlaceholder>
);

export default MyCourses;
