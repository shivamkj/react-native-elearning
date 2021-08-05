import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  CustomText as Text,
  ScreenContainer,
  OptionsPicker,
} from '../../components';
import QuestionAnswered from './views/QuestionAnswered';
import {getReport} from '../../api/exam';
import useFetch from '../../utils/useFetch';
import defaultStyles from '../../config/styles';
import Cancel from '../../assets/icons/Cancel';
import ArrowDown from '../../assets/icons/ArrowDown';

const TestReportScreen = ({navigation, route: {params}}) => {
  const [sections, setSections] = useState(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [pickerVisible, setPickerVisible] = useState(false);
  const testReport = useFetch(getReport(params.examId, params.eid));

  useEffect(() => {
    if (!testReport) return;
    const sections = testReport.sections.map((e) => e.section_name);
    setSections(sections);
  }, [testReport]);

  if (!sections) return null;
  return (
    <ScreenContainer>
      <View style={styles.topBar}>
        <Text style={styles.heading}>Test Report</Text>
        <Cancel onPress={navigation.goBack} />
      </View>
      <Text style={[styles.heading, {margin: 16}]}>{params.examName}</Text>
      <View style={styles.overviewContainer}>
        <OverviewText topText="Correct" bottomText={testReport.correct} />
        <OverviewText topText="Wrong" bottomText={testReport.wrong} />
        <OverviewText topText="Score" bottomText={testReport.score} />
        <OverviewText
          topText="Time Taken"
          bottomText={`${testReport.total_time_taken} min`}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Text onPress={() => setPickerVisible(true)}>
          Answer Sheet: {sections[currentSection]}
        </Text>
        <ArrowDown />
      </View>
      <QuestionAnswered
        question={testReport.sections[currentSection].question[0]}
      />
      <Text
        style={[styles.bottomButton, defaultStyles.shadowDark]}
        onPress={() =>
          navigation.navigate('AnswerSheet', {
            question: testReport.sections[currentSection].question,
            sectionName: testReport.sections[currentSection].section_name,
          })
        }>
        View More
      </Text>
      <OptionsPicker
        visible={pickerVisible}
        setVisible={setPickerVisible}
        options={sections}
        setSlectedOption={setCurrentSection}
        style={{top: 215, left: 0, width: 250}}
      />
    </ScreenContainer>
  );
};

const OverviewText = ({topText, bottomText}) => (
  <View>
    <Text style={{color: '#666666', fontSize: 13}}>{topText}</Text>
    <Text
      style={{textAlign: 'center', fontFamily: 'SemiBold-600', fontSize: 16}}>
      {bottomText}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: '#E4E6EC',
    borderBottomWidth: 1,
  },
  heading: {
    fontFamily: 'SemiBold-600',
    fontSize: 18,
  },
  overviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: 20,
    borderColor: '#E4E6EC',
    borderWidth: 1,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 0,
    flex: 1,
    width: '100%',
    padding: 14,
    textAlign: 'center',
    fontFamily: 'Bold-700',
    color: '#273043',
    backgroundColor: '#ffffff',
  },
});

export default TestReportScreen;
