import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {
  CustomText as Text,
  ScreenContainer,
  OptionsPicker,
  LoadingIndicator,
} from '../../components';
import {defaultStyles} from '../../config';
import {ArrowDown, Filter, BackArrow} from '../../assets/icons';
import {getPhases, getCourseContent} from '../../api/afterPurchase';
import RecyclerView from './views/RecyclerView';
import TabView from './views/TabView';
import {showToast} from '../../utils/functions';

const filterOptions = ['All content', 'PDF', 'Videos', 'Test'];

const CourseContentScreen = ({navigation, route: {params}}) => {
  const [isLoading, setIsLoading] = useState(null);
  const [courseContent, setCourseContent] = useState(null);
  const [buttons, setButtons] = useState(null);
  const [phases, setPhases] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const [currentFilter, setCurrentFilter] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(null);
  const [pickerVisible, setPickerVisible] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPhases(params.courseId).then(result => {
      const phases = result.data.data.map(value => value.phase_title);
      setPhases(phases);
      setCurrentPhase(0);
    });
  }, []);

  useEffect(() => {
    if (currentPhase == null) return;
    setIsLoading(true);
    getCourseContent(params.courseId, phases[currentPhase])
      .then(({status, data}) => {
        if (status == 200) {
          const tabs = data.content.subject.map(value => value.subject_title);
          setCourseContent(data.content.subject);
          setButtons(tabs);
          setTabIndex(0);
        } else throw 'Error while fetching';
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        showToast(err);
      });
  }, [currentPhase]);

  const filter = content => {
    if (currentFilter == 0) return content;
    let isEmpty = true;
    const type = (currentFilter - 1).toString();
    const filtered = [...content].map(row => {
      const rowCopy = Object.assign({}, row);
      rowCopy.course_content = row.course_content.filter(
        content => content.type == type,
      );
      if (rowCopy.course_content.length > 0) isEmpty = false;
      return rowCopy;
    });
    if (isEmpty) return [];
    return filtered;
  };

  if (!buttons || isLoading == true) return <LoadingIndicator />;
  return (
    <ScreenContainer>
      <View style={styles.topContainer}>
        <View style={styles.headContainer}>
          <BackArrow color="#000000" onPress={navigation.goBack} />
          <Text style={styles.courseTitle}>{params.courseTitle}</Text>
        </View>
        <View style={{overflow: 'hidden', paddingBottom: 10}}>
          <TabView
            tabs={phases}
            currentIndex={currentPhase}
            setIndex={setCurrentPhase}
          />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{paddingBottom: 6}}>
          {buttons.map((item, index) => {
            return (
              <Text
                onPress={() => setTabIndex(index)}
                style={[
                  styles.tabTitle,
                  index == tabIndex ? styles.activeTab : null,
                ]}
                key={index}>
                {item}
              </Text>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.mainContainer}>
        <RecyclerView
          data={filter(courseContent[tabIndex].content)}
          navigation={navigation}
        />
      </View>
      <TouchableOpacity
        style={defaultStyles.floatingBtn}
        activeOpacity={0.8}
        onPress={() => setPickerVisible('filter')}>
        <Filter />
      </TouchableOpacity>
      <OptionsPicker
        visible={pickerVisible == 'filter'}
        setVisible={setPickerVisible}
        options={filterOptions}
        setSlectedOption={setCurrentFilter}
        style={{bottom: 80, right: 0, width: 160}}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 10,
  },
  phasesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  phases: {
    fontFamily: 'SemiBold-600',
    fontSize: 17,
    marginRight: 6,
  },
  courseName: {
    maxWidth: '90%',
    fontSize: 12,
    alignSelf: 'flex-end',
  },
  mainContainer: {
    overflow: 'hidden',
    flex: 1,
  },
  tabTitle: {
    fontFamily: 'Medium-500',
    fontSize: 15,
    color: '#0150B5',
    backgroundColor: '#fff',
    borderColor: '#0150B5',
    borderWidth: 2,
    marginHorizontal: 6,
    padding: 6,
    height: 34,
    textTransform: 'uppercase',
    borderRadius: 6,
  },
  activeTab: {
    backgroundColor: '#0150B5',
    color: '#fff',
  },
  headContainer: {
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  courseTitle: {
    fontFamily: 'Bold-700',
    fontSize: 20,
    marginTop: 6,
  },
});

export default CourseContentScreen;
