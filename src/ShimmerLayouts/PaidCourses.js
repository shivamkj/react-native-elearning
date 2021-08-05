import React from 'react';
import {View} from 'react-native';
import SkeleletonPlaceholder from 'react-native-skeleton-placeholder';

const PaidCourses = () => (
  <SkeleletonPlaceholder speed={50}>
    <View style={{height: 30, width: '50%', margin: 12}} />
    <View style={{height: 60, width: '90%', margin: 12}} />
    <View style={{height: 60, width: '90%', margin: 12}} />
    <View style={{height: 60, width: '90%', margin: 12}} />
    <View style={{height: 60, width: '90%', margin: 12}} />
    <View style={{height: 60, width: '90%', margin: 12}} />
    <View style={{height: 60, width: '90%', margin: 12, marginBottom: 350}} />
  </SkeleletonPlaceholder>
);

export default PaidCourses;
