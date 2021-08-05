import React from 'react';
import {View} from 'react-native';
import SkeleletonPlaceholder from 'react-native-skeleton-placeholder';

const NotesListing = () => (
  <SkeleletonPlaceholder>
    <View style={{height: 30, width: '50%', margin: 12}} />
    <View style={{flexDirection: 'row'}}>
      <View style={{height: 50, width: 250, margin: 12}} />
      <View style={{height: 50, width: 60, margin: 12}} />
    </View>
    <View style={{height: 60, width: '90%', margin: 12}} />
    <View style={{height: 60, width: '90%', margin: 12}} />
    <View style={{height: 60, width: '90%', margin: 12}} />
    <View style={{height: 60, width: '90%', margin: 12}} />
    <View style={{height: 60, width: '90%', margin: 12, marginBottom: 300}} />
  </SkeleletonPlaceholder>
);

export default NotesListing;
