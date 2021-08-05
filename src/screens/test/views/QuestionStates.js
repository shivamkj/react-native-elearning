import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {CustomText as Text} from '../../../components';
import {NotAnswered, NotVisited} from '../../../assets/icons';
import {
  AnsweredMarked,
  UnansweredMarked,
  Answered,
} from '../../../assets/icons';

const allStates = [
  <Answered />,
  <NotAnswered />,
  <NotVisited />,
  <UnansweredMarked />,
  <AnsweredMarked />,
];

const QuestionStates = ({questionNum, status, onPress}) => (
  <TouchableWithoutFeedback onPress={() => onPress(questionNum)}>
    <View style={styles.container}>
      {allStates[status]}
      <Text style={{color: status == 2 ? '#000' : '#fff'}}>{questionNum}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
});

export default QuestionStates;
