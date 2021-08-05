import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, ScrollView, View, Text} from 'react-native';
import CoursesAndExams from './CoursesAndExams';

const Feeds = ({navigation, purchasedCourses}) => {
  return <Text>Hii Sample {JSON.stringify(purchasedCourses)}</Text>;
};

export default Feeds;
