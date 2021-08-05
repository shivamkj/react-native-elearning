import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import HTMLView from 'react-native-htmlview';

const HtmlView = ({value}) => (
  <HTMLView
    value={value}
    stylesheet={webStyles}
    style={styles.htmlView}
    renderNode={renderNode}
  />
);

const renderNode = (node, _, __, ___, ____) => {
  if (node.name === 'img') {
    const data = node.attribs;
    return (
      <View>
        <Image
          resizeMethod="scale"
          resizeMode="contain"
          style={{height: 500, width: 300, borderColor: 'red', borderWidth: 10}}
          source={{uri: data.src}}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  htmlView: {
    padding: 16,
    marginBottom: 12,
  },
});

const webStyles = StyleSheet.create({
  body: {
    fontSize: 16,
    fontFamily: 'Assistant',
  },
  h3: {
    fontFamily: 'SemiBold-600',
  },
  p: {
    fontSize: 16,
    fontFamily: 'Assistant',
  },
  img: {
    height: 500,
    width: 300,
  },
  strong: {
    fontFamily: 'Medium-500',
  },
});

export default HtmlView;
