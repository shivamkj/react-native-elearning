import React, {useState} from 'react';
import {StyleSheet, FlatList, ScrollView, View} from 'react-native';
import {getCourses} from '../../api/visitors';
import useFetch from '../../utils/useFetch';
import Explore from '../../ShimmerLayouts/Explore';
import {CustomText as Text, ScreenContainer} from '../../components';
import {OptionsPicker, TouchableHighlights} from '../../components';
import {ArrowDown} from '../../assets/icons';
import {colors} from '../../config';
import FreeResources from './views/FreeResources';
import AppCarousel from './views/Carousel';
import Courses from './views/Courses';
import UpcomingExams from './views/UpcomingExams';

const exams = ['Banking & Insurance', 'SSC', 'UPSC', 'MPSC', 'NET/SET', 'LAW'];

const CoursesAndExams = ({navigation}) => {
  const [courseType, setCourseType] = useState(0);
  const [pickerVisible, setPickerVisible] = useState(false);
  const data = useFetch(getCourses(courseType), [courseType], Explore);

  const renderCourses = ({item}) => (
    <Courses navigation={navigation} item={item} />
  );
  const renderResources = ({item}) => (
    <FreeResources navigation={navigation} item={item} />
  );

  const _getFreeResources = () => {
    if (data == false) return null;
    return data.free_resource[0].exam;
  };
  const renderUpcomingExams = ({item}) => {
    return <UpcomingExams name={item.exam_title} date={item.exam_date} />;
  };

  if (data == null) return null;

  return (
    <ScreenContainer style={{backgroundColor: colors.light}}>
      <TouchableHighlights
        style={styles.topBar}
        onPress={() => setPickerVisible(true)}>
        <Text style={styles.courseType}>
          {courseType == 0 ? 'All Exams' : exams[courseType - 6]}
        </Text>
        <ArrowDown />
      </TouchableHighlights>
      <ScrollView>
        <AppCarousel />
        <View style={styles.topHeading}>
          <Text style={styles.heading}>Top Courses</Text>
          <Text
            style={styles.viewMore}
            onPress={() =>
              navigation.navigate('TopCourses', {courses: data.top_courses})
            }>
            View More
          </Text>
        </View>
        <FlatList
          data={data.top_courses}
          renderItem={renderCourses}
          keyExtractor={item => item.course_id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text>No courses found</Text>}
        />
        <View style={styles.topHeading}>
          <Text style={styles.heading}>Free Resources for you</Text>
          <Text
            style={styles.viewMore}
            onPress={() =>
              navigation.navigate('FreeResources', {
                resources: _getFreeResources(),
              })
            }>
            View More
          </Text>
        </View>
        <FlatList
          data={_getFreeResources()}
          renderItem={renderResources}
          keyExtractor={item => item.exam_id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text>No free Resources Found</Text>}
        />
        <View style={styles.upcomingExam}>
          <Text style={styles.examsHeading}>Upcoming Exams</Text>
          <FlatList
            data={data.upcoming_exams}
            renderItem={renderUpcomingExams}
            keyExtractor={item => item.exam_id}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={<Text>No Upcoming Exams</Text>}
          />
        </View>
      </ScrollView>
      <OptionsPicker
        visible={pickerVisible}
        setVisible={setPickerVisible}
        options={exams}
        setSlectedOption={v => setCourseType(v + 6)}
        style={{top: 50, left: 0, width: 160}}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 12,
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Bold-700',
  },
  courseType: {
    fontFamily: 'Medium-500',
    fontSize: 19,
    marginRight: 8,
  },
  topHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
  },
  viewMore: {
    fontFamily: 'Bold-700',
    fontSize: 14,
    color: colors.primaryGreen,
  },
  upcomingExam: {
    marginTop: 18,
    paddingTop: 16,
    paddingBottom: 40,
    backgroundColor: '#3E5075',
  },
  examsHeading: {
    fontSize: 20,
    marginLeft: 16,
    fontFamily: 'Bold-700',
    color: '#fff',
    marginBottom: 18,
  },
});

export default CoursesAndExams;
