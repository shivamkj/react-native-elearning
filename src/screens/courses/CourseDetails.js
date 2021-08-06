import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {CustomText as Text, ScreenContainer, Button} from '../../components';
import {getCourseDetails} from '../../api/visitors';
import {defaultStyles} from '../../config';
import ExtraDocuments from './views/ExtraDocuments';
import CourseBanner from './views/CourseBanner';
import CourseFeatures from './views/CourseFeatures';
import CourseSummary from './views/CourseSummary';
import useFetch from '../../utils/useFetch';
import CourseDetails from '../../ShimmerLayouts/CourseDetails';
import {PurchaseBottomBar, StudyBottomBar} from './views/BottomBar';
import {getPurchasedCourses} from '../../api/afterPurchase';

const CourseDetailsScreen = ({navigation, route: {params}}) => {
  const [isPurchased, setPurchased] = useState(false);
  const courseDetails = useFetch(
    getCourseDetails(params.courseId),
    [],
    CourseDetails,
  );

  useEffect(() => {
    getPurchasedCourses().then(result => {
      if (result.data.response != 100) return;
      const isPurchased = result.data.course.some(
        course => course.course_id == params.courseId,
      );
      if (isPurchased) setPurchased(true);
    });
  }, []);

  const toCourseStructure = () =>
    navigation.navigate('CourseStructure', {
      courseId: params.courseId,
    });

  if (!courseDetails) return <View></View>;
  return (
    <ScreenContainer>
      <ScrollView>
        <CourseBanner
          imageUri={courseDetails.data.course_image}
          courseName={courseDetails.data.course_title}
          goBack={navigation.goBack}
        />
        <View style={styles.container}>
          <CourseFeatures />
          <View style={[defaultStyles.border, {marginBottom: 20}]} />
          <CourseSummary
            heading="Summary"
            summaryPoints={courseDetails.data.course_summary}
          />
          <ExtraDocuments
            documents={courseDetails.data.extra_doc}
            courseTitle={courseDetails.data.course_title}
          />
          <View style={[defaultStyles.border, {marginTop: 20}]} />
          <Text style={styles.courseStructure} onPress={toCourseStructure}>
            View Course Structure
          </Text>
          <View style={defaultStyles.border} />
        </View>
        <View style={{marginBottom: 100}} />
      </ScrollView>

      <View style={[styles.bottomBar, defaultStyles.shadowDark]}>
        {isPurchased == false ? (
          <PurchaseBottomBar
            actualFees={courseDetails.data.course_main_fees}
            fees={courseDetails.data.course_fees}
            courseId={params.courseId}
            navigation={navigation}
          />
        ) : (
          <StudyBottomBar
            courseId={params.courseId}
            title={courseDetails.data.course_title}
            navigation={navigation}
          />
        )}
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  courseStructure: {
    color: 'red',
    fontFamily: 'Bold-700',
    fontSize: 15,
    marginVertical: 20,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#ffffff',
  },
});

export default CourseDetailsScreen;
