import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  CustomText as Text,
  ScreenContainer,
  OptionsPicker,
  Button,
} from '../../components';
import {ArrowDown, Cancel} from '../../assets/icons';
import {getResult} from '../../api/exam';
import {ResultCard, ResultCard2} from './views/ResultCard';
import AnalysisTabView from './views/AnalysisTabView';
import useFetch from '../../utils/useFetch';
import {useEffect} from 'react';

const TestResultScreen = ({navigation, route: {params}}) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [sections, setSections] = useState(null);
  const [currentSection, setCurrentSection] = useState(0);
  const testResult = useFetch(getResult(params.examId));

  useEffect(() => {
    if (!testResult) return;
    const sections = testResult.section_two.data.map(v => v.section_name);
    setSections(sections);
  }, [testResult]);

  const toTestReport = () =>
    navigation.navigate('TestReport', {
      examId: params.examId,
      eid: params.eid,
      examName: testResult.exam.exam_title,
    });

  if (!sections) return null;
  return (
    <ScreenContainer>
      <ScrollView>
        <View style={styles.topCard}>
          <View style={styles.topBar}>
            <Text style={styles.examName}>{testResult.exam.exam_title}</Text>
            <Cancel color="#fff" onPress={navigation.goBack} />
          </View>
          <View>
            <Text style={styles.percentileScore}>
              {testResult.exam.student_percentage}
            </Text>
            <Text style={styles.percentile}>Percentile*</Text>
            <Text style={styles.percentileText}>
              *X percentile means that you have scored more than X% students who
              took the test.
            </Text>
          </View>
          <ResultCard result={testResult.section_one} />
        </View>
        <View style={styles.secondContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={[styles.heading, {marginRight: 7}]}
              onPress={() => setPickerVisible(true)}>
              {sections[currentSection]}
            </Text>
            <ArrowDown />
          </View>
          {/* <SectionPicker
            visible={pickerVisible}
            setVisible={setPickerVisible}
            options={sections}
            setSlectedOption={setCurrentSection}
            style={{bottom: 0, right: 0, width: '100%'}}
          /> */}
          <OptionsPicker
            visible={pickerVisible}
            setVisible={setPickerVisible}
            options={sections}
            setSlectedOption={setCurrentSection}
            style={{bottom: 0, right: 0, width: '100%', margin: 0}}
          />
          <View>
            <Text style={[styles.percentileScore, {color: '#000'}]}>
              {testResult.section_two.data[currentSection].section_percentage}
            </Text>
            <Text style={[styles.percentile, {color: '#000'}]}>
              Percentile*
            </Text>
          </View>
          <ResultCard2 result={testResult.section_two.data[currentSection]} />
        </View>
        <View style={styles.analysis}>
          <Button
            style={styles.answerLink}
            onPress={toTestReport}
            title="VIEW ANSWER SHEET"
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  topCard: {
    backgroundColor: '#273043',
    paddingHorizontal: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  examName: {
    fontFamily: 'SemiBold-600',
    fontSize: 17,
    color: '#fff',
  },
  percentileScore: {
    fontFamily: 'Bold-700',
    fontSize: 48,
    color: '#fff',
    textAlign: 'center',
    marginTop: 16,
  },
  percentile: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 34,
  },
  percentileText: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  heading: {
    fontFamily: 'SemiBold-600',
    fontSize: 17,
  },
  answerLink: {
    fontFamily: 'Bold-700',
    fontSize: 12,
  },
  analysis: {
    backgroundColor: '#F5F6FA',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  secondContainer: {
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: '#F5F6FA',
  },
});

export default TestResultScreen;
