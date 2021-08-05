import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomText as Text} from '../../../components';
import CircularProgress from './CircularProgress';
import Circle from '../../../assets/icons/Circle';
import Triangle from '../../../assets/icons/Triangle';

const ProgressContainer = ({
  heading,
  percent,
  children,
  averageMarks,
  toppersMarks,
}) => (
  <View>
    <Text style={styles.heading}>{heading}</Text>
    <CircularProgress percent={percent}>{children}</CircularProgress>
    <View style={styles.othersMark}>
      <TextWithCircle text={toppersMarks} />
      <TextWithTriangle text={averageMarks} />
    </View>
  </View>
);

const ResponseLine = ({title, color, marks}) => (
  <View style={{flex: 0.33}}>
    <View style={[styles.responseLine, {borderColor: color}]} />
    <View style={{flexDirection: 'row'}}>
      <Text style={styles.responseType}>{title}</Text>
      <Text style={[styles.marks, {color: color}]}>{marks}</Text>
    </View>
  </View>
);

const TextWithCircle = ({text}) => (
  <View style={styles.indicator}>
    <Circle />
    <Text style={styles.indicatorTxt}>{text}</Text>
  </View>
);

const TextWithTriangle = ({text}) => (
  <View style={[styles.indicator, {marginLeft: 14}]}>
    <Triangle />
    <Text style={styles.indicatorTxt}>{text}</Text>
  </View>
);

const Fraction = ({numerator, denominator}) => (
  <View style={{position: 'absolute', alignItems: 'center'}}>
    <Text style={styles.numerator}>{numerator}</Text>
    <Text style={styles.denominator}>{denominator}</Text>
  </View>
);

const styles = StyleSheet.create({
  indicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'SemiBold-600',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 13,
  },
  numerator: {
    fontFamily: 'Bold-700',
    fontSize: 22,
  },
  denominator: {
    fontSize: 12,
    opacity: 0.8,
    borderTopColor: '#000',
    borderTopWidth: 1,
  },
  responseLine: {
    marginBottom: 8,
    borderRadius: 6,
    borderWidth: 3,
  },
  responseType: {
    marginRight: 4,
    fontSize: 12,
    opacity: 0.5,
  },
  marks: {
    fontFamily: 'Bold-700',
    fontSize: 12,
  },
  othersMark: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  indicatorTxt: {
    fontFamily: 'SemiBold-600',
    fontSize: 12,
    marginLeft: 4,
  },
});

export {
  ProgressContainer,
  Fraction,
  ResponseLine,
  TextWithCircle,
  TextWithTriangle,
};
