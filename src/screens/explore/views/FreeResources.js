import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {CustomText as Text, Button} from '../../../components';
import {defaultStyles, colors} from '../../../config';
import {MockTest} from '../../../assets/icons';

const FreeResources = ({item, navigation}) => {
  const toExamInstruction = () =>
    navigation.navigate('TestInstruction', {
      name: item.exam_title,
      maxMark: item.total_marks,
      questions: item.total_qtn,
      time: item.exam_duration,
      examId: item.exam_id,
      eid: item.eid,
    });

  return (
    <View style={[styles.container, defaultStyles.shadowLight]}>
      <View style={styles.topContainer}>
        <MockTest size={30} />
        <Text style={styles.type}>TEST</Text>
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {item.exam_title}
      </Text>
      <Button color="#44AF69" title="Attempt Now" onPress={toExamInstruction} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 180,
    borderRadius: 4,
    backgroundColor: colors.white,
    margin: 10,
    padding: 16,
  },
  title: {
    fontFamily: 'SemiBold-600',
    fontSize: 16,
    marginVertical: 16,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  type: {
    fontFamily: 'Bold-700',
    fontSize: 18,
    marginLeft: 16,
    opacity: 0.4,
  },
});

export default FreeResources;
