import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {ScreenContainer, CustomText as Text, TopHeader} from '../../components';
import {getCoursePhases} from '../../api/visitors';
import StructureTab from './views/StructureTab';
import useFetch from '../../utils/useFetch';

const initialLayout = {width: Dimensions.get('window').width};

const renderTabBar = props => (
  <TabBar
    {...props}
    style={{backgroundColor: '#fff'}}
    tabStyle={{width: 'auto'}}
    activeColor="#EA3323"
    inactiveColor="#000"
    indicatorStyle={{backgroundColor: '#EA3323'}}
    scrollEnabled
  />
);

const renderScene = ({route}) => (
  <StructureTab courseId={route.courseId} phaseId={route.key} />
);

const CourseStructureScreen = ({route: {params}, navigation}) => {
  const coursePhases = useFetch(getCoursePhases(params.courseId));
  const [index, setIndex] = useState(0);
  const [routes, setRoutes] = useState();

  useEffect(() => {
    if (!coursePhases) return;
    const tabs = coursePhases.data.map(phase => ({
      key: phase.id,
      title: 'Phase ' + phase.phase_title,
      courseId: params.courseId,
    }));
    setRoutes(tabs);
  }, [coursePhases]);

  if (!routes) return null;
  return (
    <ScreenContainer>
      <TopHeader title="Course Structure" onBackPress={navigation.goBack} />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={initialLayout}
        lazy
      />
    </ScreenContainer>
  );
};

export default CourseStructureScreen;
