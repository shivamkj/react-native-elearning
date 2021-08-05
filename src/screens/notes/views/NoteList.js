import React from 'react';
import {View, StyleSheet} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {
  TouchableHighlights,
  CustomText as Text,
  Touchable,
} from '../../../components';
import {Trash} from '../../../assets/icons';

const NoteList = ({item, handleDelete, toNoteSingle}) => (
  <Swipeable
    renderRightActions={() => (
      <RightSwipe onPress={() => handleDelete(item.note_id)} />
    )}>
    <TouchableHighlights
      style={styles.item}
      onPress={() => toNoteSingle(item.pdf_title, item.note, item.note_id)}>
      <Text style={styles.title} numberOfLines={1}>
        {item.pdf_title}
      </Text>
      <View style={styles.bottom}>
        <Text style={styles.desc} numberOfLines={1}>
          {item.note}
        </Text>
        <Text style={styles.date}>{item.created_on.slice(0, 10)}</Text>
      </View>
    </TouchableHighlights>
  </Swipeable>
);

const RightSwipe = ({onPress}) => (
  <Touchable onPress={onPress} style={styles.rightSwipe}>
    <Trash />
  </Touchable>
);

const styles = StyleSheet.create({
  item: {
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 16,
  },
  title: {
    fontFamily: 'SemiBold-600',
    fontSize: 17,
  },
  bottom: {
    flexDirection: 'row',
  },
  date: {
    fontSize: 12,
    opacity: 0.5,
    marginLeft: 12,
  },
  desc: {
    flex: 1,
    fontSize: 15,
  },
  rightSwipe: {
    backgroundColor: '#EA3323',
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NoteList;
