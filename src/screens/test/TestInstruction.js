import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  CustomText as Text,
  ScreenContainer,
  Button,
  TopHeader,
  Checkbox,
} from '../../components';
import {defaultStyles} from '../../config';
import QuestionStates from './views/QuestionStates';
import {showToast }from '../../utils/functions';

const TestInstruction = ({navigation, route: {params}}) => {
  const [termAgreed, setTermAgreed] = useState(false);

  const toExam = () => {
    if (!termAgreed) showToast('Please Accept following Instruction');
    else
      navigation.replace('Test', {
        examId: params.examId,
        eid: params.eid,
      });
  };

  return (
    <ScreenContainer>
      <TopHeader title={params.name} onBackPress={navigation.goBack} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Instruction</Text>
        <BulletList
          list={[
            `Max Marks: ${params.maxMark}`,
            `Questions: ${params.questions}`,
            `Minutes: ${params.time}`,
          ]}
        />
        <Text style={styles.small}>
          The Question Palette displayed on the right side of screen will show
          the status of each question using one of the following symbols:
        </Text>
        <View style={styles.symbolContainer}>
          {QUESTION_SYMBOLS.map((item, index) => (
            <View style={styles.questionSymbol} key={index.toString()}>
              <QuestionStates
                questionNum={item.questionNum}
                status={item.status}
                onPress={() => null}
              />
              <Text style={styles.small}>{item.text}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.heading}>For multiple choice type Questions</Text>
        <BulletList list={INSTRUCTIONS} />
        <View style={{marginTop: 150}} />
      </ScrollView>
      <View style={styles.bottomView}>
        <View style={[styles.terms, defaultStyles.shadow]}>
          <Checkbox
            state={termAgreed}
            onChange={(value) => setTermAgreed(value)}
          />
          <Text style={styles.termText}>
            I have read and understood the instructions. I agree that in case of
            not adhering to the exam instructions. I will be disqualified from
            giving the exam
          </Text>
        </View>
        <Button
          title="START NOW"
          color="#44AF69"
          style={{borderRadius: 0}}
          onPress={toExam}
        />
      </View>
    </ScreenContainer>
  );
};

const BulletList = ({list}) => (
  <View style={styles.listContainer}>
    {list.map((value, index) => (
      <View style={styles.listItem} key={index}>
        <Text style={{marginRight: 10}}>{'\u2022'}</Text>
        <Text style={styles.small}>{value}</Text>
      </View>
    ))}
  </View>
);

const INSTRUCTIONS = [
  'Each question has four options, out of which only one option will be correct.',
  'One Fourth of the marks assinged to a question will be deducted for every wrong answer.',
  'No mark will be awarded or deducted for unattempted question.',
  'Each question has four options out of which only one option will be correct.',
  'To change your answer click the another desired option button.',
  'To select your answer, click on one of the option button.',
];

const QUESTION_SYMBOLS = [
  {questionNum: 0, status: 0, text: 'Answered'},
  {questionNum: 1, status: 1, text: 'Not Answered'},
  {questionNum: 49, status: 2, text: 'Not Visited'},
  {questionNum: 0, status: 3, text: 'Marked for Review'},
  {
    questionNum: 3,
    status: 4,
    text: 'Answered and Marked for Review (Will be considered for evaluation)',
  },
];

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  heading: {
    fontFamily: 'SemiBold-600',
    marginBottom: 10,
  },
  symbolContainer: {
    marginVertical: 16,
  },
  questionSymbol: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 14,
  },
  bottomView: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ffffff',
  },
  terms: {
    marginRight: 20,
    flexDirection: 'row',
    paddingVertical: 6,
  },
  termText: {
    fontFamily: 'SemiBold-600',
    fontSize: 12,
    color: '#EA332380',
    marginRight: 23,
    textAlign: 'justify',
  },
  listContainer: {
    // marginVertical: 10,
    marginHorizontal: 12,
  },
  listItem: {
    flexDirection: 'row',
    padding: 4,
  },
  small: {
    fontSize: 15,
    color: '#666666',
  },
});

export default TestInstruction;
