import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {CustomText as Text} from '../../../components';
import {TouchableHighlights} from '../../../components';
import {defaultStyles, colors} from '../../../config';

const CoursesH = ({
  item: {course_id, course_title, course_img},
  navigation,
}) => (
  <TouchableHighlights
    style={[styles.container]}
    onPress={() => navigation.navigate('CourseDetails', {courseId: course_id})}>
    <Image
      style={styles.thumbnail}
      source={{uri: course_img}}
      resizeMode="stretch"
    />
    <Text style={styles.title} numberOfLines={2}>
      {course_title}
    </Text>
  </TouchableHighlights>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 4,
    backgroundColor: colors.white,
    marginVertical: 20,
    marginHorizontal: 16,
  },
  thumbnail: {
    height: 88,
    width: 132,
  },
  title: {
    flex: 1,
    fontFamily: 'Bold-700',
    fontSize: 20,
    marginTop: 5,
    marginLeft: 16,
  },
});

export default CoursesH;
