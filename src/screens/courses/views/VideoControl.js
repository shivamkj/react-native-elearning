import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {CustomText as Text} from '../../../components';
import Slider from '@react-native-community/slider';

const VideoControl = (props) => (
  <View style={styles.control}>
    <View />

    <View style={styles.playControl}>
      <Touchable onPress={() => props.handleSeek(-10)}>
        <Image
          source={require('../../../assets/Backward.png')}
          style={styles.img}
        />
      </Touchable>

      <Touchable onPress={props.handlePlayPause}>
        {props.paused ? (
          <Image
            source={require('../../../assets/Play.png')}
            style={styles.img}
          />
        ) : (
          <Image
            source={require('../../../assets/Paused.png')}
            style={styles.img}
          />
        )}
      </Touchable>

      <Touchable onPress={() => props.handleSeek(10)}>
        <Image
          source={require('../../../assets/Forward.png')}
          style={styles.img}
        />
      </Touchable>
    </View>

    <View style={styles.bottomBar}>
      <Slider
        value={props.currentTime}
        minimumValue={0}
        maximumValue={props.duration}
        step={1}
        minimumTrackTintColor="#44AF69"
        maximumTrackTintColor="#000000"
        onSlidingComplete={(value) => props.handleSeek(value)}
        onValueChange={props.handleSliderChange}
        onSlidingStart={props.handlePlayPause}
        onSlidingComplete={props.handlePlayPause}
      />
      <View style={styles.bottomInner}>
        <Text style={styles.text}>{convertTime(props.currentTime)}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.text}>{convertTime(props.duration)}</Text>
          <Touchable onPress={props.handleOrientation}>
            <Image
              source={require('../../../assets/FullScreen.png')}
              height={50}
              width={75}
            />
          </Touchable>
          <Touchable onPress={props.setSpeedPickerVisible}>
            <Image
              source={require('../../../assets/speed.png')}
              style={{height: 33, width: 30}}
            />
          </Touchable>
        </View>
      </View>
    </View>
  </View>
);

const Touchable = ({children, onPress}) => (
  <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
    {children}
  </TouchableOpacity>
);

const convertTime = (time) => {
  const minutes = time >= 60 ? Math.floor(time / 60) : 0;
  const seconds = Math.floor(time - minutes * 60);
  return `${minutes >= 10 ? minutes : '0' + minutes}:${
    seconds >= 10 ? seconds : '0' + seconds
  }`;
};

var styles = StyleSheet.create({
  img: {
    height: 48,
    width: 48,
  },
  control: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  playControl: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 6,
    backgroundColor: '#00000080',
  },
  bottomBar: {
    width: '100%',
    paddingTop: 10,
    backgroundColor: '#00000080',
  },
  bottomInner: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});

export default VideoControl;
