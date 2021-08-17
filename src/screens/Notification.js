import React, {useEffect, useState} from 'react';
import {View, Image, FlatList, StyleSheet} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {getNotifications} from '../api/afterPurchase';
import {
  LoadingIndicator,
  ScreenContainer,
  TopHeader,
  withEmptyState,
  CustomText as Text,
  TouchableHighlights,
} from '../components';
import {navigate} from '../utils/functions';

const NotificationScreen = ({navigation, setEmpty}) => {
  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    getNotifications().then(result => {
      if (result.data.response == 100) setNotifications(result.data.data);
      else {
        setEmpty({
          name: 'Notification',
          title: 'No Notification',
          description: 'There is no new notification yet!',
        });
      }
    });
  }, []);

  if (notifications == null) return <LoadingIndicator />;

  return (
    <ScreenContainer>
      <TopHeader title="Notification" onBackPress={navigation.goBack} />
      <FlatList
        data={notifications}
        renderItem={({item}) => <Notification item={item} />}
        keyExtractor={item => item.notif_id}
        ListEmptyComponent={<Text>No Notification</Text>}
      />
    </ScreenContainer>
  );
};

const Notification = ({item}) => {
  const navigation = React.useContext(NavigationContext);

  return (
    <TouchableHighlights
      style={styles.container}
      onPress={() => navigate(item, navigation)}>
      <Image style={styles.img} source={{uri: item.placeholder_img}} />
      <View style={styles.description}>
        <Text style={styles.title}>
          {`${item.notif_title} in ${item.course_title} ${item.title}`}
        </Text>
        <Text style={styles.time}>{item.created_on}</Text>
      </View>
    </TouchableHighlights>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#D8D8D8',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    padding: 12,
  },
  img: {
    height: 40,
    width: 40,
  },
  description: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 14,
  },
  time: {
    fontFamily: 'SemiBold-600',
    fontSize: 13,
    color: '#666666',
  },
});

export default withEmptyState(NotificationScreen);
