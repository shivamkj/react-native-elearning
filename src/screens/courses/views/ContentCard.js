import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {CustomText as Text} from '../../../components';

const PdfCard = ({data: {id, title, path, placeholder_img}, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigation.navigate('PdfViewer', {id, title, link: path})}
      activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <Image style={styles.placeholderImg} source={{uri: placeholder_img}} />
      </View>
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const VideoCard = ({data: {title, path, placeholder_img}, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigation.navigate('VideoPlayer', {title, link: path})}
      activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <Image style={styles.placeholderImg} source={{uri: placeholder_img}} />
      </View>
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const LiveVideo = ({data: {title, placeholder_img, liveInfo}, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() =>
        navigation.navigate('LiveStream', {link: liveInfo.lecture_url})
      }
      activeOpacity={0.9}>
      <View style={styles.imageContainer}>
        <Image style={styles.placeholderImg} source={{uri: placeholder_img}} />
      </View>
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const TestCard = ({
  data: {id, title, examInfo, placeholder_img},
  navigation,
}) => {
  return (
    <TouchableOpacity
      style={styles.box}
      activeOpacity={0.9}
      onPress={() =>
        navigation.navigate('TestInstruction', {
          name: title,
          examId: id,
          eid: examInfo.eid,
          time: examInfo.exam_duration,
          maxMark: examInfo.total_marks,
          questions: examInfo.total_qtn,
        })
      }>
      <View style={styles.imageContainer}>
        <Image style={styles.placeholderImg} source={{uri: placeholder_img}} />
      </View>
      <Text numberOfLines={2} style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: 60,
    borderColor: '#d8d8d8',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 4,
    overflow: 'hidden',
  },
  title: {
    fontSize: 14,
  },
  box: {
    width: 90,
    margin: 16,
  },
  placeholderImg: {
    height: '100%',
    width: '100%',
  },
});

export {PdfCard, VideoCard, TestCard, LiveVideo};
