import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList, ScrollView, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {getCourses, getExamTypes} from '../../api/visitors';
import useFetch from '../../utils/useFetch';
import Explore from '../../ShimmerLayouts/Explore';
import {CustomText as Text, ScreenContainer} from '../../components';
import {OptionsPicker, TouchableHighlights} from '../../components';
import {ArrowDown} from '../../assets/icons';
import {colors} from '../../config';
import FreeResources from './views/FreeResources';
import AppCarousel from './views/Carousel';
import Courses from './views/Courses';
import UpcomingCourses from './views/UpcomingCourses';

const CoursesAndExams = () => {
  const [examTypes, setExamTypes] = useState(null);
  const [typeNames, setTypeNames] = useState(null);
  const [selectedType, setSelectedType] = useState(0);
  const [pickerVisible, setPickerVisible] = useState(false);
  const data = useFetch(
    getCourses(
      examTypes == null ? 0 : examTypes[selectedType - 1]?.type_id || 0,
    ),
    [selectedType],
    Explore,
  );
  const navigation = React.useContext(NavigationContext);

  useEffect(() => {
    getExamTypes().then(result => {
      if (result.data.response == 100) {
        const names = [];
        names.push('All Exams');
        result.data.data.forEach(examType => {
          names.push(examType.exam_type_name);
        });
        setTypeNames(names);
        setExamTypes(result.data.data);
      }
    });
  }, []);

  const renderCourses = ({item}) => <Courses item={item} />;
  const renderResources = ({item}) => <FreeResources item={item} />;
  const renderUpcomingCourses = ({item}) => <UpcomingCourses item={item} />;

  const toFreeResources = () =>
    navigation.navigate('FreeResources', {
      resources: data.free_resource_new,
    });
  const toCourses = () =>
    navigation.navigate('TopCourses', {courses: data.top_courses});

  if (data == null || examTypes == null) return null;
  return (
    <ScreenContainer style={{backgroundColor: colors.light}}>
      <TouchableHighlights
        style={styles.topBar}
        onPress={() => setPickerVisible(true)}>
        <Text style={styles.courseType}>{typeNames[selectedType]}</Text>
        <ArrowDown />
      </TouchableHighlights>
      <ScrollView>
        <AppCarousel />
        <View style={styles.topHeading}>
          <Text style={styles.heading}>Top Courses</Text>
          <Text style={styles.viewMore} onPress={toCourses}>
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
          <Text style={styles.viewMore} onPress={toFreeResources}>
            View More
          </Text>
        </View>
        <FlatList
          data={data.free_resource_new}
          renderItem={renderResources}
          keyExtractor={item => item.exam_id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={<Text>No free Resources Found</Text>}
        />
        {data.upcoming_courses.length > 0 ? (
          <View style={styles.upcomingExam}>
            <Text style={styles.examsHeading}>Upcoming Courses</Text>
            <FlatList
              data={data.upcoming_courses}
              renderItem={renderUpcomingCourses}
              keyExtractor={item => item.course_id}
              horizontal
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={<Text>No Upcoming Courses</Text>}
            />
          </View>
        ) : null}
      </ScrollView>
      <OptionsPicker
        visible={pickerVisible}
        setVisible={setPickerVisible}
        options={typeNames}
        setSlectedOption={setSelectedType}
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

/* <SectionList
  ListHeaderComponent={() => <AppCarousel data={banner} />}
  sections={[
    { title: "Top Courses", data: data.courses },
    { title: "Free Resources for you", data: data.freeResources },
  ]}
  renderSectionHeader={({ section }) => (
    <>
      <Text style={styles.heading}>{section.title}</Text>
      <FlatList
        data={section.data}
        renderItem={renderRow}
        keyExtractor={(item) => item.course_id || item.exam_id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </>
  )}
  renderItem={({ _ }) => <View></View>}
  keyExtractor={(item) => item.course_id || item.exam_id}
/> */

// const renderRow = ({ item }) => {
//   if (item.course_id)
//     return (
//       <TouchableHighlight
//         underlayColor={defaultStyles.colors.light}
//         onPress={() => navigation.push("CourseDetails", { courseId: item.course_id })}
//       >
//         <View style={[styles.card, defaultStyles.shadowLight]}>
//           <Image
//             style={styles.thumbnail}
//             source={{ uri: item.course_img }}
//             resizeMode="stretch"
//           />
//           <Text style={styles.title} numberOfLines={2}>
//             {item.course_title}
//           </Text>
//         </View>
//       </TouchableHighlight>
//     );
//   return (
//     <View style={[styles.card, defaultStyles.shadowLight, styles.resourcesCard]}>
//       <View style={styles.top}>
//         <Image style={styles.icon} source={require("../assets/exam.png")} />
//         <Text style={styles.type}>TEST</Text>
//       </View>
//       <Text style={styles.title} numberOfLines={2}>
//         {item.exam_title}
//       </Text>
//       <Button
//         btnStyle={styles.attempt}
//         color="#44AF69"
//         title="Attempt Now"
//         onPress={() => navigation.navigate("TestInstruction")}
//       />
//     </View>
//   );
// };
