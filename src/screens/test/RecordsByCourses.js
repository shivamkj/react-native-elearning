import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  CustomText as Text,
  ScreenContainer,
  withEmptyState,
} from '../../components';
import {TopHeader, TouchableHighlights} from '../../components';
import {ListItemSeparator} from '../../components';
import {ArrowRight} from '../../assets/icons';
import {getTestRecords} from '../../api/exam';
import useFetch from '../../utils/useFetch';
import PaidCourses from '../../ShimmerLayouts/PaidCourses';

const RecordsByCoursesScreen = ({navigation, route: {params}, setEmpty}) => {
  const testRecords = useFetch(getTestRecords(), [], PaidCourses);

  // useEffect(() => {
  //   if (!testRecords) return;
  //   if (testRecords.response != 100) {
  //     setEmpty({
  //       name: params.title,
  //       title: 'No Data Available',
  //       description:
  //         'This feauture is available only for Premium users.Please login and Purchase course to use this feature.',
  //     });
  //   }
  // }, [testRecords]);

  const toNotesListing = (item) =>
    navigation.navigate('TestRecord', {
      title: item.course_title,
      records: item.exam,
    });

  const renderItem = ({item}) => (
    <TouchableHighlights
      style={styles.item}
      onPress={() => toNotesListing(item)}>
      <Text style={styles.title} numberOfLines={2}>
        {item.course_title}
      </Text>
      <ArrowRight />
    </TouchableHighlights>
  );

  if (!testRecords) return null;
  return (
    <ScreenContainer>
      <TopHeader title={params.title} onBackPress={navigation.goBack} />
      <FlatList
        data={testRecords.data}
        renderItem={renderItem}
        keyExtractor={(item) => item.course_id}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 16,
  },
  title: {
    flex: 0.9,
    fontFamily: 'SemiBold-600',
    fontSize: 17,
  },
});

export default withEmptyState(RecordsByCoursesScreen);
