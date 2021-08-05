import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Bad, Best, Good, Neutral, Wrost} from '../assets/emojis';

const FeedbackPopup = ({onSelect, title}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onPress = (index) => {
    setActiveIndex(index);
    onSelect(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.emojis}>
        <Wrost active={activeIndex == 0} onPress={() => onPress(0)} />
        <Bad active={activeIndex == 1} onPress={() => onPress(1)} />
        <Neutral active={activeIndex == 2} onPress={() => onPress(2)} />
        <Good active={activeIndex == 3} onPress={() => onPress(3)} />
        <Best active={activeIndex == 4} onPress={() => onPress(4)} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  emojis: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 12,
  },
  title: {
    fontFamily: 'SemiBold-600',
    fontSize: 17,
    marginTop: 6,
    textAlign: 'center',
  },
});

export default FeedbackPopup;
