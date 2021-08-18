import React from 'react';
import {NavigationContext} from '@react-navigation/native';
import {Image, View, StyleSheet} from 'react-native';
import {CustomText as Text, Touchable} from '../../../components';
import {defaultStyles} from '../../../config';

const UpcomingCourses = ({item}) => {
  const navigation = React.useContext(NavigationContext);

  return (
    <Touchable
      style={[styles.container, defaultStyles.shadowLight]}
      onPress={() =>
        navigation.navigate('CourseDetails', {courseId: item.course_id})
      }>
      <Image
        style={styles.thumbnail}
        source={{uri: item.course_img}}
        resizeMode="stretch"
      />
      <Text style={styles.title} numberOfLines={2}>
        {item.course_title}
      </Text>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 180,
    borderRadius: 4,
    backgroundColor: '#fff',
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

// const UpcomingExams = ({name, date}) => (
//   <View style={styles.container}>
//     <Text style={styles.examName} numberOfLines={2}>
//       {name}
//     </Text>
//     <Text style={styles.examDate}>{date}</Text>
//     <Button title="Explore Now" />
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     width: 180,
//     margin: 10,
//     padding: 16,
//     backgroundColor: '#fff',
//     borderRadius: 4,
//   },
//   examName: {
//     height: 50,
//     fontFamily: 'SemiBold-600',
//     fontSize: 16,
//   },
//   examDate: {
//     fontFamily: 'Bold-700',
//     fontSize: 20,
//     color: '#EA3323',
//     paddingBottom: 16,
//     marginBottom: 16,
//     borderBottomColor: colors.lightGrey,
//     borderBottomWidth: 1,
//   },
// });

export default UpcomingCourses;
