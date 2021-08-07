import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, CustomText as Text} from '../../../components';
import {colors} from '../../../config';

const UpcomingExams = ({name, date}) => (
  <View style={styles.container}>
    <Text style={styles.examName} numberOfLines={2}>
      {name}
    </Text>
    <Text style={styles.examDate}>{date}</Text>
    <Button title="Explore Now" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 180,
    margin: 10,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  examName: {
    height: 50,
    fontFamily: 'SemiBold-600',
    fontSize: 16,
  },
  examDate: {
    fontFamily: 'Bold-700',
    fontSize: 20,
    color: '#EA3323',
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
});

export default UpcomingExams;
