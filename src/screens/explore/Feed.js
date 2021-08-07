import React, {useEffect, useState} from 'react';
import {useGlobalContext} from '../../utils/globalContext';
import {StyleSheet, FlatList, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {PdfCard, VideoCard, TestCard} from './views/Cards';
import {
  CustomText as Text,
  LoadingIndicator,
  ScreenContainer,
} from '../../components';
import {OptionsPicker, TouchableHighlights} from '../../components';
import {ArrowDown} from '../../assets/icons';
import {colors} from '../../config';
import AppCarousel from './views/Carousel';
import {getFeed} from '../../api/afterPurchase';
import {getCourses} from '../../api/visitors';
import useFetch from '../../utils/useFetch';
import Courses from './views/Courses';

const Feed = () => {
  const {paidCourses} = useGlobalContext();
  const [courseSelected, setCourseSelected] = useState(0);
  const [courseFeed, setCourseFeed] = useState(null);
  const [pickerVisible, setPickerVisible] = useState(false);
  const navigation = React.useContext(NavigationContext);

  const data = useFetch(getCourses());

  const renderCourses = ({item}) => <Courses item={item} />;

  const coursesTitles = () => paidCourses.map(course => course.course_title);

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
    console.log(item.type);
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

  if (courseFeed == null) return <LoadingIndicator />;
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
});

export default Feed;
