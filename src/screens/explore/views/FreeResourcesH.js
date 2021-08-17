import React from 'react';
import {NavigationContext} from '@react-navigation/native';
import {View, StyleSheet, Image} from 'react-native';
import {CustomText as Text, Button} from '../../../components';
import {defaultStyles, colors} from '../../../config';
import {navigate} from '../../../utils/functions';

const FreeResourcesH = ({item}) => {
  const navigation = React.useContext(NavigationContext);

  return (
    <View style={[styles.container, defaultStyles.shadowLight]}>
      <View style={styles.topContainer}>
        <Image style={styles.img} source={{uri: item.placeholder_img}} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <Button
        color="#44AF69"
        title={getActionName(item.type)}
        onPress={() => navigate(item, navigation)}
      />
    </View>
  );
};

const getActionName = type => {
  switch (type) {
    case '0':
      return 'READ NOW';
    case '1':
      return 'WATCH NOW';
    case '2':
      return 'ATTEMPT NOW';
    default:
      throw Error(`No type found for the type ${type}`);
  }
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: colors.white,
    margin: 16,
    padding: 16,
  },
  title: {
    flex: 1,
    fontFamily: 'SemiBold-600',
    fontSize: 16,
    marginLeft: 16,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  img: {
    width: 30,
    height: 30,
  },
});

export default FreeResourcesH;
