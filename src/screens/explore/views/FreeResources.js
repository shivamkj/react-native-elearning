import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {CustomText as Text, Button} from '../../../components';
import {defaultStyles, colors} from '../../../config';
import {navigate} from '../../../utils/functions';

const FreeResources = ({item}) => {
  const navigation = React.useContext(NavigationContext);

  const [type, action] = getAttributes(item.type);

  return (
    <View style={[styles.container, defaultStyles.shadowLight]}>
      <View style={styles.topContainer}>
        <Image style={styles.img} source={{uri: item.placeholder_img}} />
        <Text style={styles.type}>{type}</Text>
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <Button
        color="#44AF69"
        title={action}
        onPress={() => navigate(item, navigation)}
      />
    </View>
  );
};

const getAttributes = type => {
  switch (type) {
    case '0':
      return ['NEWS', 'READ NOW'];
    case '1':
      return ['VIDEO', 'WATCH NOW'];
    case '2':
      return ['MOCK TEST', 'ATTEMPT NOW'];
    default:
      throw Error(`No type found for the type ${type}`);
  }
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 180,
    borderRadius: 4,
    backgroundColor: colors.white,
    margin: 10,
    padding: 16,
  },
  title: {
    fontFamily: 'SemiBold-600',
    fontSize: 16,
    marginVertical: 16,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  type: {
    fontFamily: 'Bold-700',
    fontSize: 18,
    marginLeft: 16,
    opacity: 0.4,
  },
  img: {
    width: 30,
    height: 30,
  },
});

export default FreeResources;
