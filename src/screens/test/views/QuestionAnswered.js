import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {CustomText as Text} from '../../../components';
import HtmlView from './HtmlView';

const options = ['A', 'B', 'C', 'D', 'E'];

const getWrongAnswer = (question) => {
  if (question.correct_ans_id == question.your_answer_id) return null;
  const wrongAnswer = question.options.find(
    (option) => option.opid == question.your_answer_id,
  );
  return question.options.indexOf(wrongAnswer);
};

const QuestionAnswered = ({question}) => {
  const wrongAnswer = getWrongAnswer(question);
  return (
    <ScrollView>
      <HtmlView
        value={`<h3>Question. ${question.seq}</h3> <p>${question.question}</p>`}
      />
      {question.options.map((value, index) => (
        <McqOption
          text={value.option}
          isCorrect={value.opid == question.correct_ans_id ? true : false}
          isWrong={index == wrongAnswer}
          index={index}
          key={index.toString()}
        />
      ))}
      <HtmlView value={`<h3>Solution</h3> <p> ${question.solution} </p>`} />
      <View style={{marginBottom: 60}} />
    </ScrollView>
  );
};

const McqOption = ({text, index, isCorrect, isWrong}) => (
  <View
    style={[
      styles.container,
      {backgroundColor: getBgColor(isCorrect, isWrong)},
    ]}>
    <Text style={styles.txt}> {`(${options[index]}) ${text}`}</Text>
  </View>
);

const getBgColor = (isCorrect, isWrong) => {
  if (isCorrect) return '#2DD06690';
  else if (isWrong) return '#EA332390';
  else return null;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#F7F8FC',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EC',
  },
  txt: {
    width: '90%',
    fontSize: 16,
  },
});

export default QuestionAnswered;
