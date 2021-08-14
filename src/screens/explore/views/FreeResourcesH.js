import React from 'react';
import {NavigationContext} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import {CustomText as Text, Button} from '../../../components';
import {defaultStyles, colors} from '../../../config';
import {MockTest} from '../../../assets/icons';

const FreeResourcesH = ({item}) => {
  const navigation = React.useContext(NavigationContext);
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
        <Text style={styles.title}>{item.exam_title}</Text>
      </View>
      <Button color="#44AF69" title="Attempt Now" onPress={toExamInstruction} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: colors.white,
    margin: 16,
    padding: 16,
  },
  title: {
    flex: 1,
    fontFamily: 'SemiBold-600',
    fontSize: 16,
    marginLeft: 16,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
});

export default FreeResourcesH;
