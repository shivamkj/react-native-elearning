import React, {memo} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {CustomText as Text} from '../../../components';
import {getCourseStructure} from '../../../api/visitors';
import useFetch from '../../../utils/useFetch';

const TextBlock = ({heading, points}) => {
  return (
    <>
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.points}>
        {points.map((value) => value.topic_title + '\n')}
      </Text>
    </>
  );
};

const StructureTab = memo(({courseId, phaseId}) => {
  const courseContent = useFetch(getCourseStructure(courseId, phaseId));

  if (!courseContent) return null;
  return (
    <ScrollView style={styles.scene}>
      <View style={{marginBottom: 22}} />
      {courseContent.content.subject.map((module, index) => {
        return (
          <TextBlock
            heading={module.subject_title}
            points={module.topics}
            key={index}
          />
        );
      })}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginLeft: 27,
  },
  heading: {
    fontFamily: 'Bold-700',
    paddingBottom: 0,
  },
  points: {
    opacity: 0.5,
  },
});

export default StructureTab;
