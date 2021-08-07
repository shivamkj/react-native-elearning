import React from 'react';
import {NavigationContext} from '@react-navigation/native';
import {Image, StyleSheet} from 'react-native';
import {CustomText as Text} from '../../../components';
import {TouchableHighlights} from '../../../components';
import {defaultStyles, colors} from '../../../config';

const Courses = ({item: {course_id, course_title, course_img}}) => {
  const navigation = React.useContext(NavigationContext);

  return (
    <TouchableHighlights
      style={[styles.container, defaultStyles.shadowLight]}
      onPress={() =>
        navigation.navigate('CourseDetails', {courseId: course_id})
      }>
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
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    borderRadius: 4,
    backgroundColor: colors.white,
    margin: 10,
  },
  thumbnail: {
    height: 119,
    width: 180,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontFamily: 'SemiBold-600',
    fontSize: 16,
    margin: 16,
    marginBottom: 12,
  },
});

export default Courses;
