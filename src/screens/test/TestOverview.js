import React, {useEffect, useRef} from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import {
  CustomText as Text,
  ScreenContainer,
  Button,
  TopHeader,
  LoadingIndicator,
} from '../../components';
import {submitResult} from '../../api/exam';
import colors from '../../config/colors';
import {useGlobalContext} from '../../utils/globalContext';
import {getAuthDetails} from '../../utils/authStorage';

const TestOverviewScreen = ({navigation, route: {params}}) => {
  const {dispatch} = useGlobalContext();
  const retryAttempt = useRef(0);

  useEffect(() => {
    const filteredResponse = params.userResponse.filter((e) => e != null);
    sendResponse(filteredResponse);
  }, []);

  const sendResponse = async (filteredResponse) => {
    try {
      dispatch({type: 'loading', payload: LoadingIndicator});
      const {userId} = await getAuthDetails();
      const userResponse = {
        userid: userId,
        exam_id: params.examId,
        total_time_taken: params.timeTaken,
        eid: params.eid,
        user_res: filteredResponse,
      };
      const {data} = await submitResult(userResponse);
      const status = data.response;
      if (status == 102 || status == 107)
        dispatch({type: 'loading', payload: false});
      else throw Error();
    } catch (err) {
      showAlert(filteredResponse);
    }
  };

  const showAlert = (filteredResponse) =>
    Alert.alert(
      'Unexpected server error occured',
      'Please try to submit again.',
      [
        {
          text: 'Submit Again',
          onPress: () => {
            if (retryAttempt.current < 2) {
              retryAttempt.current += 1;
              sendResponse(filteredResponse);
            }
            dispatch({type: 'loading', payload: false});
          },
        },
      ],
    );

  return (
    <ScreenContainer>
      <TopHeader title="Mock Test Overview" onBackPress={navigation.goBack} />
      <ScrollView contentContainerStyle={styles.container}>
        {params.attemptSummary.map((data, index) => (
          <Section
            key={index}
            section={data.name}
            totalQue={data.total}
            attempted={data.summary[0] + data.summary[4]}
            notAttempted={data.summary[1] + data.summary[2]}
            marked={data.summary[3]}
          />
        ))}
      </ScrollView>
      <Button
        style={{width: '90%', marginBottom: 20}}
        title="SEE RESULT"
        onPress={() =>
          navigation.replace('TestResult', {
            examId: params.examId,
            eid: params.eid,
          })
        }
      />
    </ScreenContainer>
  );
};

const Section = ({section, totalQue, attempted, notAttempted, marked}) => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionOverview}>
      <Text style={styles.sectionName}>{section}</Text>
      <InlineText title="Total Question: " num={totalQue} />
    </View>
    <InlineText title="Question Attempted: " num={attempted} />
    <InlineText title="Question Not Attempted: " num={notAttempted} />
    <InlineText title="Marked for Review: " num={marked} />
  </View>
);

const InlineText = ({title, num}) => (
  <View style={styles.inlineText}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.bold}>{num}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderColor: colors.medium,
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    margin: 16,
  },
  sectionOverview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionName: {
    fontFamily: 'SemiBold-600',
    textTransform: 'uppercase',
  },
  inlineText: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  title: {
    fontSize: 15,
  },
  bold: {
    fontFamily: 'SemiBold-600',
  },
  sectionContainer: {
    marginBottom: 16,
  },
});

export default TestOverviewScreen;
