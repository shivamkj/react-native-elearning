import React, {useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {
  CustomText as Text,
  ScreenContainer,
  withEmptyState,
} from '../../components';
import {TopHeader, TouchableHighlights} from '../../components';
import {ListItemSeparator} from '../../components';
import {ArrowRight} from '../../assets/icons';
import {getPurchasedCourses} from '../../api/afterPurchase';
import useFetch from '../../utils/useFetch';
import PaidCourses from '../../ShimmerLayouts/PaidCourses';

const MyNotesScreen = ({navigation, route: {params}, setEmpty}) => {
  const paidCourses = useFetch(getPurchasedCourses(), [], PaidCourses);

  useEffect(() => {
    if (!paidCourses) return;
    if (paidCourses.course.length == 0) {
      setEmpty({
        name: params.title,
        title: 'No Data Available',
        description:
          'This feauture is available only for Premium users. Please login and Purchase course to make your notes.',
      });
    } else
      paidCourses.course.push({
        course_id: '0',
        course_title: 'Other Notes',
      });
  }, [paidCourses]);

  const toNotesListing = (item) => {
    navigation.navigate('NotesListing', {
      title: item.course_title,
      courseId: item.course_id == '0' ? null : item.course_id,
    });
  };

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

  // const addOthers = (courses) => {
  // courses.push({
  //   course_id: '0',
  //   course_title: 'Other Notes',
  // });
  // return courses;
  // };

  if (!paidCourses) return null;
  return (
    <ScreenContainer>
      <TopHeader title={params.title} onBackPress={navigation.goBack} />
      <FlatList
        data={paidCourses.course}
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

export default withEmptyState(MyNotesScreen);
