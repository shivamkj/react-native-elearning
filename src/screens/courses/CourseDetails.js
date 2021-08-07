import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {CustomText as Text, ScreenContainer} from '../../components';
import {useGlobalContext} from '../../utils/globalContext';
import {getCourseDetails} from '../../api/visitors';
import {defaultStyles} from '../../config';
import ExtraDocuments from './views/ExtraDocuments';
import CourseBanner from './views/CourseBanner';
import CourseFeatures from './views/CourseFeatures';
import CourseSummary from './views/CourseSummary';
import useFetch from '../../utils/useFetch';
import CourseDetails from '../../ShimmerLayouts/CourseDetails';
import {PurchaseBottomBar, StudyBottomBar} from './views/BottomBar';

const CourseDetailsScreen = ({navigation, route: {params}}) => {
  const [isPurchased, setPurchased] = useState(false);
  const courseDetails = useFetch(
    getCourseDetails(params.courseId),
    [],
    CourseDetails,
  );
  const {paidCourses} = useGlobalContext();

  useEffect(() => {
    const isPurchased = paidCourses.some(
      course => course.course_id == params.courseId,
    );
    if (isPurchased == true) setPurchased(true);
  }, []);

  const toCourseStructure = () =>
    navigation.navigate('CourseStructure', {
      courseId: params.courseId,
    });

  if (!courseDetails) return <View />;
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
            fees={courseDetails.data.course_main_fees}
            discountedFees={courseDetails.data.course_fees}
            courseId={params.courseId}
          />
        ) : (
          <StudyBottomBar
            courseId={params.courseId}
            title={courseDetails.data.course_title}
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
