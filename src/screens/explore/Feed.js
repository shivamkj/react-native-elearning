import React, {useEffect, useState} from 'react';
import {useGlobalContext} from '../../utils/globalContext';
import {StyleSheet, FlatList, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {PdfCard, VideoCard, TestCard} from './views/Cards';
import {CustomText as Text, ScreenContainer} from '../../components';
import {OptionsPicker, TouchableHighlights} from '../../components';
import {ArrowDown} from '../../assets/icons';
import {colors} from '../../config';
import AppCarousel from './views/Carousel';
import {getFeed} from '../../api/afterPurchase';
import {getCourses} from '../../api/visitors';
import useFetch from '../../utils/useFetch';
import Courses from './views/Courses';
import FreeResources from './views/FreeResources';
import Explore from '../../ShimmerLayouts/Explore';

const Feed = () => {
  const {paidCourses} = useGlobalContext();
  const [courseSelected, setCourseSelected] = useState(0);
  const [courseFeed, setCourseFeed] = useState(null);
  const [pickerVisible, setPickerVisible] = useState(false);
  const navigation = React.useContext(NavigationContext);

  const data = useFetch(getCourses());

  useEffect(() => {
    const courseId = paidCourses[courseSelected].course_id;
    getFeed(courseId).then(result => {
      if (result.data.response == 100) {
        setCourseFeed(result.data.content.latest_upload);
      }
    });
  }, [courseSelected]);

  const onCourseSelect = courseIndex => setCourseSelected(courseIndex);

  const renderItem = ({item}) => {
    switch (item.type) {
      case '0':
        return <PdfCard data={item} navigation={navigation} />;
      case '1':
        return <VideoCard data={item} navigation={navigation} />;
      case '2':
        return <TestCard data={item} navigation={navigation} />;
      default:
        return null;
    }
  };

  const coursesTitles = () => paidCourses.map(course => course.course_title);

  const renderCourses = ({item}) => <Courses item={item} />;
  const renderResources = ({item}) => <FreeResources item={item} />;

  const toFreeResources = () =>
    navigation.navigate('FreeResources', {
      resources: data.free_resource_new,
    });
  const toTopCourses = () =>
    navigation.navigate('TopCourses', {courses: data.top_courses});

  if (courseFeed == null || data == null) return <Explore />;
  return (
    <ScreenContainer style={{backgroundColor: colors.light}}>
      <TouchableHighlights
        style={styles.topBar}
        onPress={() => setPickerVisible(true)}>
        <Text style={styles.courseType}>
          {paidCourses[courseSelected].course_title}
        </Text>
        <ArrowDown />
      </TouchableHighlights>
      <FlatList
        ListHeaderComponent={
          <>
            <AppCarousel />
            <View style={styles.topHeading}>
              <Text style={styles.heading}>Top Courses</Text>
              <Text style={styles.viewMore} onPress={toTopCourses}>
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
              keyExtractor={item => item.id + item.type}
              horizontal
              showsHorizontalScrollIndicator={false}
              ListEmptyComponent={<Text>No free Resources Found</Text>}
            />
            <Text style={styles.feedHeading}>Courses Feed</Text>
          </>
        }
        data={courseFeed}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id + index.toString()}
      />
      <OptionsPicker
        visible={pickerVisible}
        setVisible={setPickerVisible}
        options={coursesTitles()}
        setSlectedOption={onCourseSelect}
        style={{top: 50, left: 0, width: 260}}
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
  courseType: {
    fontFamily: 'Medium-500',
    fontSize: 19,
    marginRight: 8,
  },
  heading: {
    fontSize: 20,
    fontFamily: 'Bold-700',
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
  feedHeading: {
    fontSize: 20,
    fontFamily: 'Bold-700',
    margin: 16,
  },
});

export default Feed;
