import React from 'react';
import {TouchableHighlight, View} from 'react-native';

const TouchableHighlights = ({children, onPress, style}) => (
  <TouchableHighlight onPress={onPress} underlayColor="#F9F9F9">
    <View style={style}>{children}</View>
  </TouchableHighlight>
);

export default TouchableHighlights;
