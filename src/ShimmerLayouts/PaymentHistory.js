import React from 'react';
import {View} from 'react-native';
import SkeleletonPlaceholder from 'react-native-skeleton-placeholder';

const PaymentHistory = () => (
  <SkeleletonPlaceholder>
    <View style={{height: 30, width: '50%', margin: 20}} />
    <View style={{height: 300, width: '90%', margin: 12}} />
    <View style={{height: 300, width: '90%', margin: 12}} />
    <View style={{height: 300, width: '90%', margin: 12}} />
  </SkeleletonPlaceholder>
);

export default PaymentHistory;
