import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import ScreenContainer from './ScreenContainer';
import Text from './Text';

const withEmptyState = (WrappedComponent) => {
  return (props) => {
    const [empty, setEmpty] = useState(false);

    if (empty) return <EmptyState empty={empty} />;

    return <WrappedComponent setEmpty={setEmpty} {...props} />;
  };
};

const EmptyState = ({empty: {name, title, description}}) => (
  <ScreenContainer>
    <Text style={styles.topBar} numberOfLines={1}>
      {name}
    </Text>
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  </ScreenContainer>
);

const styles = StyleSheet.create({
  topBar: {
    padding: 18,
    backgroundColor: '#fff',
    fontSize: 20,
    fontFamily: 'Bold-700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 28,
  },
  heading: {
    fontFamily: 'Medium-500',
    fontSize: 20,
  },

  description: {
    textAlign: 'center',
  },
});

export default withEmptyState;
