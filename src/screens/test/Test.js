import React, {useState, useEffect, useReducer, useRef} from 'react';
import {Alert, View, StyleSheet} from 'react-native';
import {
  ScreenContainer,
  CustomText as Text,
  Touchable,
  LoadingIndicator,
} from '../../components';
import {getExam} from '../../api/exam';
import {defaultStyles} from '../../config';
import {useGlobalContext} from '../../utils/globalContext';
import {BackArrow, ArrowUp, ArrowDown} from '../../assets/icons';
import QuestionsPalette from './views/QuestionsPalette';
import Question from './views/Question';
import {reducer, initialState} from './TestReducer';

const TestScreen = ({navigation, route: {params}}) => {
  const [state, set] = useReducer(reducer, initialState);
  const [timeLeft, setTimeLeft] = useState(5);
  const [isOpen, setIsOpen] = useState(false);
  const response = useRef([]);
  const timeTaken = useRef(0);
  const attemptSummary = useRef([]);
  const testEnded = useRef(false);

  const {dispatch} = useGlobalContext();

  useEffect(() => {
    dispatch({type: 'loading', payload: LoadingIndicator});
    getExam(params.examId, params.eid)
      .then(response => {
        console.log(response.data);
        if (response.data.response == 100) {
          set({type: 'TestStarted', sections: response.data.sections});
          dispatch({type: 'loading', payload: false});
          attemptSummary.current = response.data.sections.map(section => {
            const total = section.question.length;
            return {
              name: section.section_name,
              total,
              summary: [0, 1, total - 1, 0, 0],
            };
          });
        } else {
          testEnded.current = true;
          navigation.goBack();
          if (response.data.response == 301)
            throw 'Please login to attempt test';
          throw 'Error Occured while fetching Data';
        }
      })
      .catch(err => dispatch({type: 'error', payload: err}));
  }, []);

  const onFinish = () => {
    setResponse(
      state.selectedOptions,
      state.data,
      state.queStatus,
      state.currentSection,
      response,
    );
    attemptSummary.current[state.currentSection].summary = state.attemptSummary;
    if (
      state.currentSection + 1 > state.data.length - 1 ||
      testEnded.current == true
    ) {
      testEnded.current = true;
      if (timeLeft == 0)
        timeTaken.current += state.data[state.currentSection].section_time;
      else
        timeTaken.current +=
          state.data[state.currentSection].section_time - timeLeft / 60;
      navigation.replace('TestOverview', {
        eid: params.eid,
        examId: params.examId,
        timeTaken: timeTaken.current,
        userResponse: response.current,
        attemptSummary: attemptSummary.current,
      });
    } else {
      set({type: 'ChangeSection', payload: null});
      timeTaken.current += state.data[state.currentSection].section_time;
    }
  };

  useEffect(() => {
    // Timer
    if (!state.data) return;
    setTimeLeft(state.data[state.currentSection].section_time * 60);
    const timeout = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime == 0) {
          clearInterval(timeout);
          onFinish();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timeout);
  }, [state.data, state.currentSection]);

  const markForReview = () => set({type: 'SaveQuestion', isMarked: true});
  const nextQuestion = () => set({type: 'SaveQuestion', isMarked: false});
  const clearResponse = () => set({type: 'ClearResponse'});
  const changeQuestion = queNum => set({type: 'ChangeQuestion', queNum});
  const onOptionSelect = optIndex => set({type: 'OptionSelected', optIndex});

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      if (testEnded.current == true) return;
      e.preventDefault();
      Alert.alert('Leave Test', 'Do you want to terminate the test?', [
        {text: 'No', style: 'cancel', onPress: () => {}},
        {
          text: 'Yes',
          onPress: () => navigation.dispatch(e.data.action),
        },
      ]);
    });
    return unsubscribe;
  }, [navigation]);

  const onSubmit = () =>
    Alert.alert('Submit Test', 'Are you sure want to submit the test?', [
      {text: 'No', style: 'cancel', onPress: () => {}},
      {
        text: 'Yes',
        onPress: () => {
          testEnded.current = true;
          onFinish();
        },
      },
    ]);

  if (!state.data) return null;
  return (
    <ScreenContainer>
      <View style={styles.topBar}>
        <BackArrow color="#000000" onPress={navigation.goBack} />
        <Text style={styles.timer}>{secondsToTime(timeLeft)}</Text>
        <Text onPress={onSubmit} style={styles.submitBtn}>
          Submit
        </Text>
      </View>
      <Touchable
        onPress={() => setIsOpen(prev => !prev)}
        style={styles.section}>
        <Text>{state.data[state.currentSection].section_name}</Text>
        {isOpen == true ? <ArrowUp /> : <ArrowDown />}
      </Touchable>
      <Question
        question={
          state.data[state.currentSection].question[state.currentQuestion]
        }
        onOptionSelect={onOptionSelect}
        selectedOption={state.selectedOptions[state.currentQuestion]}
      />
      <View style={styles.bottomBar}>
        <Text
          style={[styles.bottomButton, defaultStyles.shadowDark]}
          onPress={markForReview}>
          Mark for Review
        </Text>
        <Text
          style={[styles.bottomButton, defaultStyles.shadowDark]}
          onPress={clearResponse}>
          Clear Option
        </Text>
        <Text
          style={[styles.bottomButton, defaultStyles.shadowDark, styles.save]}
          onPress={nextQuestion}>
          Save and Next
        </Text>
      </View>
      <QuestionsPalette
        visibility={{get: isOpen, set: setIsOpen}}
        queStatus={state.queStatus}
        startingQuestion={parseInt(
          state.data[state.currentSection].question[0].seq,
        )}
        changeQuestion={changeQuestion}
        style={{top: 103}}
        attemptSummary={state.attemptSummary}
      />
    </ScreenContainer>
  );
};

const setResponse = (
  selectedOptions,
  data,
  queStatus,
  currentSection,
  response,
) =>
  selectedOptions.map((value, index) => {
    if (queStatus[index] == 0 || queStatus[index] == 4) {
      const question = data[currentSection].question[index];
      const {question_id, qid, seq} = question;
      const {option_id, opid} = question.options[value];
      response.current[parseInt(question.seq)] = {
        question_id,
        qid,
        answer: option_id,
        answer_id: opid,
        seq,
      };
    }
  });

const secondsToTime = secs => {
  const hours = Math.floor(secs / 3600);
  const divisor = secs % 3600;
  const minutes = Math.floor(divisor / 60);
  const seconds = Math.ceil(divisor % 60);
  return `${hours} : ${minutes} : ${seconds}`;
};

const styles = StyleSheet.create({
  topBar: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 3,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EC',
  },
  section: {
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E6EC',
  },
  question: {
    padding: 16,
    marginBottom: 12,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    zIndex: 10,
  },
  bottomButton: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 12,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'SemiBold-600',
    backgroundColor: '#ffffff',
    borderRightColor: '#273043',
    borderRightWidth: 1,
  },
  submitBtn: {
    fontFamily: 'Bold-700',
    fontSize: 15,
    color: '#3458A1',
  },
  save: {
    color: '#ffffff',
    backgroundColor: '#273043',
  },
  timer: {
    fontFamily: 'SemiBold-600',
    fontSize: 18,
    color: '#EA3323',
  },
});

export default TestScreen;
