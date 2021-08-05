import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image, FlatList} from 'react-native';
import {CustomText as Text, ScreenContainer, TopHeader} from '../../components';
import {TouchableHighlights, withEmptyState} from '../../components';
import {ArrowRight} from '../../assets/icons';
import {getPaidCourses} from '../../api/afterPurchase';
import {colors} from '../../config';
import useFetch from '../../utils/useFetch';
import MyCourses from '../../ShimmerLayouts/MyCourses';

const MyCoursesScreen = ({navigation, setEmpty}) => {
  const courses = useFetch(getPaidCourses(), [], MyCourses);

  useEffect(() => {
    if (courses == false)
      setEmpty({
        name: 'MY COURSES',
        title: 'No Courses Available',
        description:
          "Looks like currently you don't have any purchased course. Your purchased course will be available here",
      });
  }, [courses]);

  const toCourseContent = (item) =>
    navigation.navigate('CourseContent', {
      courseTitle: item.course_title,
      courseId: item.course_id,
    });

  if (!courses) return null;
  return (
    <ScreenContainer>
      <TopHeader title="MY COURSES" />
      <FlatList
        data={courses.data}
        renderItem={({item}) => (
          <Course item={item} navigate={toCourseContent} />
        )}
        keyExtractor={(item) => item.course_id}
      />
    </ScreenContainer>
  );
};

const Course = ({item, navigate}) => (
  <TouchableHighlights onPress={() => navigate(item)} style={styles.container}>
    <Image
      resizeMode="contain"
      source={{uri: item.course_img}}
      style={styles.courseImage}
    />
    <View style={styles.rightContent}>
      <View style={styles.inner}>
        <Text style={styles.examName} numberOfLines={3}>
          {item.course_title}
        </Text>
        <ArrowRight />
      </View>
      {/* <View>
        <Text style={styles.percentage}>{item.progress} %</Text>
        <View style={styles.progressBar}>
          <View
            style={[styles.progress, {width: item.progress.toString() + '%'}]}
          />
        </View>
      </View> */}
    </View>
  </TouchableHighlights>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: 16,
    paddingBottom: 17,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  rightContent: {marginLeft: 16, flex: 1},
  courseImage: {
    width: 132,
    height: 88,
    borderRadius: 10,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  examName: {
    fontFamily: 'SemiBold-600',
    fontSize: 20,
    marginRight: 24,
    flex: 1,
  },
  // percentage: {
  //   color: colors.primaryGreen,
  //   fontSize: 14,
  //   marginBottom: 2,
  // },
  // progressBar: {
  //   height: 3,
  //   width: '75%',
  //   backgroundColor: colors.lightGrey,
  //   borderRadius: 4,
  // },
  // progress: {
  //   backgroundColor: 'green',
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0,
  //   borderRadius: 5,
  // },
});

export default withEmptyState(MyCoursesScreen);
