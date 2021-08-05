import React from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import QuestionStates from './QuestionStates';
import {CustomText as Text} from '../../../components';
import {
  AnsweredMarked,
  UnansweredMarked,
  Answered,
} from '../../../assets/icons';

const QuestionsPalette = ({
  queStatus,
  startingQuestion,
  changeQuestion,
  style,
  attemptSummary,
  visibility,
}) => {
  const onQuestionChange = (questionNum) => {
    changeQuestion(questionNum - startingQuestion);
    visibility.set(false);
  };
  return (
    <View
      style={[
        styles.container,
        {height: visibility.get ? '100%' : '0%'},
        style,
      ]}>
      <ScrollView>
        <AttemptSummary attemptSummary={attemptSummary} />
        <View style={styles.questions}>
          {queStatus.map((v, i) => (
            <QuestionStates
              questionNum={i + startingQuestion}
              status={v}
              key={i}
              onPress={onQuestionChange}
            />
          ))}
        </View>
        <View style={{marginBottom: 80}} />
      </ScrollView>
      <View style={{marginBottom: 150}} />
    </View>
  );
};

const AttemptSummary = ({attemptSummary}) => {
  const noClick = () => null;
  if (attemptSummary.length == 2)
    return (
      <>
        <View style={styles.top}>
          <View style={styles.summary}>
            <QuestionStates status={0} onPress={noClick} />
            <Text>Answered: {attemptSummary[0]}</Text>
          </View>
          <View style={styles.summary}>
            <QuestionStates status={1} onPress={noClick} />
            <Text>Not Answered: {attemptSummary[1]}</Text>
          </View>
        </View>
      </>
    );
  return (
    <>
      <View style={styles.top}>
        <View style={styles.summary}>
          <QuestionStates status={0} onPress={noClick} />
          <Text>Answered: {attemptSummary[0]}</Text>
        </View>
        <View style={styles.summary}>
          <QuestionStates status={1} onPress={noClick} />
          <Text>Not Answered: {attemptSummary[1]}</Text>
        </View>
      </View>
      <View style={styles.top}>
        <View style={styles.summary}>
          <QuestionStates status={2} onPress={noClick} />
          <Text>Not Visited: {attemptSummary[2]}</Text>
        </View>
        <View style={styles.summary}>
          <QuestionStates status={3} onPress={noClick} />
          <Text>Marked for Review: {attemptSummary[3]}</Text>
        </View>
      </View>
      <View style={styles.summary}>
        <QuestionStates status={4} onPress={noClick} />
        <Text>
          Answered and Marked for Review (will be considered for evaluation):
          {attemptSummary[4]}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    borderColor: '#000',
    borderWidth: 1,
    zIndex: 9,
  },
  questions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  top: {
    flexDirection: 'row',
    marginLeft: 12,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
});

export default QuestionsPalette;
