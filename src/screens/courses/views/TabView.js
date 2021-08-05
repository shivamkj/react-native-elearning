import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import defaultStyles from '../../../config/styles';
import {CustomText as Text} from '../../../components';

const TabView = ({tabs, currentIndex, setIndex}) => {
  const scrollViewRef = useRef();
  useEffect(() => {
    scrollViewRef.current.scrollTo({x: 0, animated: true});
  }, [tabs]);

  return (
    <View style={[styles.container, defaultStyles.shadow]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={scrollViewRef}>
        {tabs.map((item, index) => {
          return (
            <Text
              onPress={() => setIndex(index)}
              style={[
                styles.tabTitle,
                index == currentIndex ? styles.activeTab : null,
              ]}
              key={index}>
              {item}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: '100%',
    height: 34,
    backgroundColor: '#fff',
    paddingHorizontal: 6,
  },
  tabTitle: {
    fontFamily: 'Medium-500',
    fontSize: 15,
    marginHorizontal: 6,
    padding: 0,
    height: 34,
    textTransform: 'uppercase',
  },
  activeTab: {
    borderBottomColor: 'red',
    borderBottomWidth: 3,
    borderRadius: 2,
  },
});

export default TabView;
