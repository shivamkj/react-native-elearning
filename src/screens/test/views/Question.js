import React from 'react';
import {View, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';
import {CustomText as Text} from '../../../components';
import Selected from '../../../assets/icons/Selected';
import HtmlView from './HtmlView';

const options = ['A', 'B', 'C', 'D', 'E'];

const Question = ({question, onOptionSelect, selectedOption}) => (
  <ScrollView>
    <HtmlView
      value={`<h3>Question. ${question.seq}</h3> <p>${question.question}</p>`}
    />
    {question.options.map((value, index) => (
      <McqOption
        text={value.option}
        onSelect={onOptionSelect}
        selected={index == selectedOption ? true : false}
        index={index}
        key={index.toString()}
      />
    ))}
    <View style={{marginBottom: 60}} />
  </ScrollView>
);

const McqOption = ({text, onSelect, index, selected}) => (
  <TouchableHighlight
    onPress={() => onSelect(index)}
    style={[
      styles.container,
      {borderBottomColor: selected ? '#76BD20' : '#E4E6EC'},
    ]}
    underlayColor="#F9F9F9">
    <>
      <Text style={styles.txt}> {`(${options[index]}) ${text}`}</Text>
      {selected && <Selected />}
    </>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  html: {
    fontSize: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#F7F8FC',
    borderBottomWidth: 1,
  },
  txt: {
    width: '90%',
    fontSize: 16,
  },
});

export default Question;
