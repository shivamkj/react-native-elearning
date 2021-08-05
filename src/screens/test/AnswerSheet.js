import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomText as Text, ScreenContainer} from '../../components';
import QuestionAnswered from './views/QuestionAnswered';
import BackArrow from '../../assets/icons/BackArrow';
import ArrowDown from '../../assets/icons/ArrowDown';
import ArrowUp from '../../assets/icons/ArrowUp';
import defaultStyles from '../../config/styles';
import QuestionsPalette from './views/QuestionsPalette';

const AnswerSheetScreen = ({navigation, route: {params}}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [queStatus, setQueStatus] = useState(null);
  const [attemptSummary, setAttemptSummary] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const onLoad = useEffect(() => {
    const [queStatus, attemptSummary] = getQuePalletDetails(params.question);
    setQueStatus(queStatus);
    setAttemptSummary(attemptSummary);
  }, []);

  const nextQuestion = () => {
    if (currentQuestion == params.question.length - 1) return;
    setCurrentQuestion((question) => question + 1);
  };

  const previousQuestion = () => {
    if (currentQuestion == 0) return;
    setCurrentQuestion((question) => question - 1);
  };

  const changeQuestion = (queNum) => {
    setCurrentQuestion(queNum);
  };

  if (!attemptSummary) return null;
  return (
    <ScreenContainer>
      <View style={styles.topBar}>
        <BackArrow color="#000" onPress={navigation.goBack} />
        <Text style={styles.heading}>Answer Sheet</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text
          onPress={() => setIsOpen((prev) => !prev)}
          style={{marginRight: 4}}>
          {params.sectionName}
        </Text>
        {isOpen == true ? <ArrowUp /> : <ArrowDown />}
      </View>
      <QuestionAnswered question={params.question[currentQuestion]} />
      <QuestionsPalette
        startingQuestion={parseInt(params.question[0].seq)}
        visibility={{get: isOpen, set: setIsOpen}}
        queStatus={queStatus}
        changeQuestion={changeQuestion}
        style={{top: 117}}
        attemptSummary={attemptSummary}
      />
      <View style={styles.bottomBar}>
        <Text
          style={[
            styles.bottomButton,
            defaultStyles.shadowDark,
            styles.previous,
          ]}
          onPress={previousQuestion}>
          PREVIOUS
        </Text>
        <Text
          style={[styles.bottomButton, defaultStyles.shadowDark, styles.next]}
          onPress={nextQuestion}>
          NEXT
        </Text>
      </View>
    </ScreenContainer>
  );
};

const getQuePalletDetails = (question) => {
  let answered = 0;
  let notAnswered = 0;
  const queStatus = [];
  question.map((question) => {
    if (question.your_answer_id) {
      answered++;
      queStatus.push(0);
    } else {
      notAnswered++;
      queStatus.push(1);
    }
  });
  return [queStatus, [answered, notAnswered]];
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#E4E6EC',
    borderBottomWidth: 1,
  },
  heading: {
    fontFamily: 'SemiBold-600',
    fontSize: 18,
    marginLeft: 8,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomColor: '#E4E6EC',
    borderBottomWidth: 1,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  bottomButton: {
    flex: 1,
    padding: 16,
    textAlign: 'center',
    fontFamily: 'SemiBold-600',
  },
  previous: {
    backgroundColor: '#ffffff',
  },
  next: {
    color: '#ffffff',
    backgroundColor: '#273043',
  },
});

export default AnswerSheetScreen;
