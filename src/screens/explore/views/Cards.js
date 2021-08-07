import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {CustomText as Text} from '../../../components';
import {defaultStyles} from '../../../config';

const PdfCard = ({
  data: {id, title, path, placeholder_img, created_on},
  navigation,
}) => (
  <TouchableOpacity
    style={[styles.itemContainer, defaultStyles.shadowLight]}
    activeOpacity={0.9}
    onPress={() => navigation.navigate('PdfViewer', {id, title, link: path})}>
    <View style={styles.icon}>
      <Image style={styles.placeholderImg} source={{uri: placeholder_img}} />
    </View>
    <View style={styles.rightSide}>
      <Text style={styles.title} numberOfLines={3}>
        {title}
      </Text>
      <Text style={styles.time}>{created_on}</Text>
    </View>
  </TouchableOpacity>
);

const VideoCard = ({
  data: {title, path, placeholder_img, created_on},
  navigation,
}) => (
  <TouchableOpacity
    style={[styles.itemContainer, defaultStyles.shadowLight]}
    activeOpacity={0.9}
    onPress={() => navigation.navigate('VideoPlayer', {title, link: path})}>
    <View style={styles.icon}>
      <Image style={styles.placeholderImg} source={{uri: placeholder_img}} />
    </View>
    <View style={styles.rightSide}>
      <Text style={styles.title} numberOfLines={3}>
        {title}
      </Text>
      <Text style={styles.time}>{created_on}</Text>
    </View>
  </TouchableOpacity>
);

const LiveVideo = ({
  data: {title, liveInfo, placeholder_img, created_on},
  navigation,
}) => (
  <TouchableOpacity
    style={[styles.itemContainer, defaultStyles.shadowLight]}
    onPress={() =>
      navigation.navigate('LiveStream', {link: liveInfo.lecture_url})
    }
    activeOpacity={0.9}>
    <View style={styles.icon}>
      <Image style={styles.placeholderImg} source={{uri: placeholder_img}} />
    </View>
    <View style={styles.rightSide}>
      <Text style={styles.title} numberOfLines={3}>
        {title}
      </Text>
      <Text style={styles.time}>{created_on}</Text>
    </View>
  </TouchableOpacity>
);

const TestCard = ({
  data: {id, title, examInfo, placeholder_img, created_on},
  navigation,
}) => (
  <TouchableOpacity
    style={[styles.itemContainer, defaultStyles.shadowLight]}
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
    <View style={styles.icon}>
      <Image style={styles.placeholderImg} source={{uri: placeholder_img}} />
    </View>
    <View style={styles.rightSide}>
      <Text style={styles.title} numberOfLines={3}>
        {title}
      </Text>
      <Text style={styles.time}>{created_on}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#fff',
  },
  icon: {
    width: 95,
    height: 60,
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 4,
    marginRight: 16,
    overflow: 'hidden',
  },
  title: {
    flex: 2,
    fontSize: 15,
    fontFamily: 'Bold-700',
    marginRight: 10,
  },
  placeholderImg: {
    height: '100%',
    width: '100%',
  },
  time: {
    color: '#ABABAB',
    fontSize: 13,
    fontFamily: 'SemiBold-600',
  },
  rightSide: {flex: 1},
});

export {PdfCard, VideoCard, TestCard, LiveVideo};