import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {
  ScreenContainer,
  TopHeader,
  CustomText as Text,
  Touchable,
} from '../../components';
import {MockTest} from '../../assets/icons';

const TestRecordScreen = ({navigation, route: {params}}) => {
  const toTestResult = (examId, eid) =>
    navigation.navigate('TestResult', {examId, eid});

  return (
    <ScreenContainer>
      <TopHeader title={params.title} onBackPress={navigation.goBack} />
      <FlatList
        data={params.records}
        renderItem={({item}) => (
          <TestRecord
            item={item}
            onPress={() => toTestResult(item.exam_id, item.eid)}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        style={{marginHorizontal: 16}}
        showsVerticalScrollIndicator={false}
      />
    </ScreenContainer>
  );
};

const TestRecord = ({item, onPress}) => (
  <>
    <Text style={styles.date}>{item.exam_date}</Text>
    <Touchable style={styles.container} onPress={onPress}>
      <View style={styles.testIcon}>
        <MockTest size={40} />
      </View>
      <View style={styles.details}>
        <Text style={styles.examName} numberOfLines={2}>
          {item.exam_title}
        </Text>
        <Text style={styles.results}>See Results</Text>
      </View>
      <View style={styles.percentileContainer}>
        <Text style={styles.percentile}>
          {parseFloat(item.percentile).toFixed(2)}
        </Text>
        <Text style={styles.percentileText}>Percentile</Text>
      </View>
    </Touchable>
  </>
);

const styles = StyleSheet.create({
  date: {
    opacity: 0.6,
    fontSize: 13,
    marginBottom: 6,
    marginTop: 12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  testIcon: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 4,
    marginRight: 16,
  },
  details: {
    flex: 2,
    margin: 6,
  },
  results: {
    marginTop: 2,
    color: '#3458A1',
    fontFamily: 'SemiBold-600',
    fontSize: 14,
  },
  percentileContainer: {
    marginLeft: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentile: {
    fontFamily: 'Bold-700',
    fontSize: 18,
    marginBottom: 2,
  },
  percentileText: {
    fontFamily: 'SemiBold-600',
    fontSize: 12,
    opacity: 0.6,
  },
});

const data = [
  {
    title: 'Saturday September 3, 2019',
    examName: 'ad nostrud in voluptate culpa magna',
    percentile: 92.99,
  },
  {
    title: 'Saturday September 3, 2019',
    examName: 'voluptate aliqua amet id duis ullamco',
    percentile: 70.22,
  },
  {
    title: 'Wednesday September 10, 2019',
    examName: 'deserunt velit laborum dolore veniam ex',
    percentile: 83.46,
  },
  {
    title: 'Wednesday September 10, 2019',
    examName: 'non Lorem et Lorem esse et',
    percentile: 67.2,
  },
  {
    title: 'Saturday September 3, 2019',
    examName: 'dolor consectetur anim cillum non adipisicing',
    percentile: 92.99,
  },
  {
    title: 'Saturday September 3, 2019',
    examName: 'pariatur elit do adipisicing eiusmod officia',
    percentile: 70.22,
  },
  {
    title: 'Wednesday September 10, 2019',
    examName: 'nisi anim proident duis non deserunt',
    percentile: 83.46,
  },
  {
    title: 'Wednesday September 10, 2019',
    examName: 'ipsum qui do id cupidatat proident',
    percentile: 67.2,
  },
];

export default TestRecordScreen;
