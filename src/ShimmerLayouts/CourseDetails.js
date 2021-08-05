import React from 'react';
import {View} from 'react-native';
import SkeleletonPlaceholder from 'react-native-skeleton-placeholder';

const CourseDetails = () => {
  return (
    <SkeleletonPlaceholder>
      <View style={{height: 250, width: '100%'}} />
      <View style={{height: 80, width: '90%', margin: 12}} />
      <View style={{height: 30, width: '50%', margin: 12}} />
      <View style={{height: 20, width: '60%', margin: 12}} />
      <View style={{height: 20, width: '60%', margin: 12}} />
      <View style={{height: 30, width: '75%', margin: 12}} />
      <View style={{height: 20, width: '60%', margin: 12}} />
      <View style={{height: 80, width: '90%', margin: 12, marginBottom: 100}} />
    </SkeleletonPlaceholder>
  );
};

export default CourseDetails;
