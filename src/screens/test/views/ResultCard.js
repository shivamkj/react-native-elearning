import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomText as Text} from '../../../components';
import {
  ResponseLine,
  ProgressContainer,
  Fraction,
  TextWithTriangle,
  TextWithCircle,
} from './ResultCardElements';

const toPercent = (num) => Math.round(num * 100);

const ResultCard = ({result}) => {
  const total = parseInt(result.total_qtn);
  const scorePercentage = toPercent(parseFloat(result.score) / total);
  const accuracyPercentage = toPercent(parseFloat(result.accuracy) / total);
  const attemptPercentage = toPercent(parseInt(result.attempt) / total);

  return (
    <View style={styles.container}>
      <View style={[styles.top, {backgroundColor: '#f8f8f8'}]}>
        <ResponseLine title="Correct" marks={result.correct} color="#3DDB74" />
        <ResponseLine
          title="Incorrect"
          marks={result.incorrect}
          color="#F07469"
        />
        <ResponseLine
          title="Unattempted"
          marks={result.unattempted}
          color="#959595"
        />
      </View>
      <View style={styles.middleView}>
        <ProgressContainer
          heading="Score"
          percent={scorePercentage}
          averageMarks={result.students_score.score_avg}
          toppersMarks={result.students_score.score_topper}>
          <Fraction numerator={result.score} denominator={total} />
        </ProgressContainer>
        <ProgressContainer
          heading="Attempted"
          percent={attemptPercentage}
          averageMarks={result.students_attempt.score_avg}
          toppersMarks={result.students_attempt.score_topper}>
          <Fraction numerator={result.attempt} denominator={total} />
        </ProgressContainer>
        <ProgressContainer
          heading="Accuracy"
          percent={accuracyPercentage}
          toppersMarks={result.students_accuracy.score_topper + '%'}
          averageMarks={result.students_accuracy.score_avg + '%'}>
          <Text style={styles.accuracy}>{result.accuracy}%</Text>
        </ProgressContainer>
      </View>
      <View style={[styles.bottom, {backgroundColor: '#f8f8f8'}]}>
        <TextWithCircle text="Topper" />
        <TextWithTriangle text="Average" />
      </View>
    </View>
  );
};

const ResultCard2 = ({result}) => {
  const total = parseInt(result.total_qtn);
  const scorePercentage = toPercent(parseFloat(result.score) / total);
  const accuracyPercentage = toPercent(parseFloat(result.accuracy) / total);
  const attempted = total - parseInt(result.unattempted);
  const attemptPercentage = toPercent(attempted / total);

  return (
    <View style={styles.container}>
      <View style={[styles.top, {backgroundColor: '#fff'}]}>
        <ResponseLine title="Correct" marks={result.correct} color="#3DDB74" />
        <ResponseLine
          title="Incorrect"
          marks={result.incorrect}
          color="#F07469"
        />
        <ResponseLine
          title="Unattempted"
          marks={result.unattempted}
          color="#959595"
        />
      </View>
      <View style={styles.middleView}>
        <ProgressContainer
          heading="Score"
          percent={scorePercentage}
          averageMarks={result.low_student.min_score}
          toppersMarks={result.max_student.max_score}>
          <Fraction numerator={result.score} denominator={total} />
        </ProgressContainer>
        <ProgressContainer
          heading="Attempted"
          percent={attemptPercentage}
          averageMarks={total - parseInt(result.low_student.min_unattempted)}
          toppersMarks={total - parseInt(result.max_student.max_unattempted)}>
          <Fraction numerator={attempted} denominator={total} />
        </ProgressContainer>
        <ProgressContainer
          heading="Accuracy"
          percent={accuracyPercentage}
          toppersMarks={result.accuracy + '%'}
          averageMarks={result.accuracy + '%'}>
          <Text style={styles.accuracy}>{result.accuracy}%</Text>
        </ProgressContainer>
      </View>
      <View style={[styles.bottom, {backgroundColor: '#fff'}]}>
        <TextWithCircle text="Topper" />
        <TextWithTriangle text="Average" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginBottom: 32,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    borderBottomWidth: 2,
    borderBottomColor: '#F5F5F5',
    marginBottom: 20,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    borderTopColor: '#f5f5f5',
    borderTopWidth: 2,
  },
  accuracy: {
    fontFamily: 'Bold-700',
    fontSize: 22,
    position: 'absolute',
  },
  middleView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
});

export {ResultCard, ResultCard2};
