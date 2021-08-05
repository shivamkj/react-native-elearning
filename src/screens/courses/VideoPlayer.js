import React, {useState, useRef} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {
  ScreenContainer,
  CustomText as Text,
  Touchable,
  OptionsPicker,
} from '../../components';
import Video from 'react-native-video';
import {useEffect} from 'react';
import Orientation from 'react-native-orientation-locker';
import VideoControl from './views/VideoControl';

const ORIENTATION = {
  LANDSCAPE: 0,
  PORTRAIT: 1,
};
const SPEED_OPTIONS = [0.75, 1, 1.5, 2];

const VideoPlayerScreen = ({route: {params}}) => {
  const [controlsVisible, setControlsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [orientation, setOrientation] = useState(ORIENTATION.LANDSCAPE);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [paused, setPaused] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const timeOut = useRef();
  const videoRef = useRef();

  useEffect(() => {
    if (orientation == ORIENTATION.LANDSCAPE) Orientation.lockToLandscape();
    else Orientation.lockToPortrait();
    return () => Orientation.lockToPortrait();
  }, [orientation]);

  const handleControl = () => {
    if (controlsVisible) {
      clearTimeout(timeOut.current);
      setControlsVisible(false);
    } else {
      setControlsVisible(true);
      timeOut.current = setTimeout(() => setControlsVisible(false), 3000);
    }
  };
  const handleOrientation = () => {
    if (orientation == ORIENTATION.LANDSCAPE)
      setOrientation(ORIENTATION.PORTRAIT);
    else setOrientation(ORIENTATION.LANDSCAPE);
  };
  const handleSeek = (time) => {
    videoRef.current.seek(currentTime + time);
    setCurrentTime(currentTime + time);
  };
  const handleSliderChange = (time) => {
    videoRef.current.seek(time);
    setCurrentTime(time);
  };

  const onLoad = (payload) => {
    setDuration(payload.duration);
    setLoading(false);
  };
  const onProgress = (payload) => {
    setCurrentTime(payload.currentTime);
  };
  function onEnd() {
    setPaused(true);
    videoRef.current.seek(0);
  }

  return (
    <ScreenContainer>
      <Touchable
        style={[
          styles.container,
          orientation == ORIENTATION.PORTRAIT ? {height: 250} : {},
        ]}
        onPress={handleControl}>
        <Video
          source={{uri: params.link}}
          ref={videoRef}
          rate={speed}
          onProgress={onProgress}
          onLoad={onLoad}
          onEnd={onEnd}
          style={styles.absolute}
          resizeMode="contain"
          paused={paused}
        />
        {loading && (
          <View style={[styles.absolute, styles.loadingIndicator]}>
            <ActivityIndicator size="large" color="#000000" />
          </View>
        )}
        {controlsVisible && (
          <VideoControl
            handleOrientation={handleOrientation}
            setSpeedPickerVisible={() => setPickerVisible(true)}
            paused={paused}
            handlePlayPause={() => setPaused((paused) => !paused)}
            currentTime={currentTime}
            handleSeek={handleSeek}
            duration={duration}
            handleSliderChange={handleSliderChange}
          />
        )}
        <OptionsPicker
          visible={pickerVisible}
          setVisible={setPickerVisible}
          options={SPEED_OPTIONS}
          setSlectedOption={(index) => setSpeed(SPEED_OPTIONS[index])}
          style={{top: 10, right: 10, width: 140}}
        />
      </Touchable>
    </ScreenContainer>
  );
};

var styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  loadingIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e1e4e8',
  },
});

export default VideoPlayerScreen;
