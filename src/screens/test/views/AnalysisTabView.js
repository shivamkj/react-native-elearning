import React from 'react';
import {StyleSheet, useWindowDimensions} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {CustomText as Text} from '../../../components';

const TextBlock = ({points}) => (
  <Text style={styles.points}>{points.map((value) => value + '\n')}</Text>
);
const TabSingle = React.memo(({points}) => <TextBlock points={points} />);

const renderTabBar = (props) => (
  <TabBar
    {...props}
    style={styles.tabBar}
    activeColor="#EA3323"
    inactiveColor="#000"
    indicatorStyle={{backgroundColor: '#EA3323'}}
  />
);

const getMaxPoints = (analysis) => {
  const lengths = [
    analysis.week.length,
    analysis.avg.length,
    analysis.strong.length,
  ];
  return lengths.indexOf(Math.max(...lengths));
};

const AnalysisTabView = ({analysis}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Weak', title: 'Weak', points: analysis.week},
    {key: 'Average', title: 'Average', points: analysis.avg},
    {key: 'Strong', title: 'Strong', points: analysis.strong},
  ]);

  const renderScene = ({route}) => <TabSingle points={route.points} />;
  const maxPoints = getMaxPoints(analysis);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{width: layout.width}}
      style={{height: 75 * maxPoints + 100}}
    />
  );
};

const styles = StyleSheet.create({
  points: {
    opacity: 0.5,
    color: '#000',
  },
  tabBar: {
    backgroundColor: '#fff',
    elevation: 0,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});

export default AnalysisTabView;
