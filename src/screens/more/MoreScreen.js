import React, {useEffect, useState} from 'react';
import {FlatList, View, StyleSheet, Linking, Alert, Share} from 'react-native';
import {ArrowRight} from '../../assets/icons';
import {Notes, Password, Payment, Logout} from '../../assets/more';
import {Support, TestRecord} from '../../assets/more';
import {
  ScreenContainer,
  CustomText as Text,
  TouchableHighlights,
} from '../../components';
import {defaultStyles} from '../../config';
import {logoutUser} from '../../utils/authService';
import {getAuthDetails} from '../../utils/authStorage';
import {showToast} from '../../utils/functions';
import {useGlobalContext} from '../../utils/globalContext';
import ProfileSection from './views/ProfileSection';

const APP_LINK = ' https://play.google.com/store/apps/details?id=in.edua.app';
const SHARE_MESSAGE = `Let's learn with Edua! 
It's excellent E-learning  platform for all competitive exams.
Edua online course consist of videos, study notes, live classes, practice tests and expert counseling.
Connect us at
Link: ${APP_LINK}`;

const MoreScreen = ({navigation}) => {
  const [options, setOptions] = useState(null);
  const {dispatch} = useGlobalContext();

  useEffect(() => {
    (async () => {
      const auth = await getAuthDetails();
      if (auth == null) setOptions(WITHOUT_SINGIN);
      else setOptions(OPTIONS);
    })();
  }, []);

  const handleClick = title => {
    if (title == 'Logout') askLogout();
    else if (title == 'Privacy') {
      Linking.openURL('https://edua.in/home/privacy').catch(err =>
        showToast('Sorry, Could not load page'),
      );
    } else if (title == 'Share App') {
      Share.share({message: SHARE_MESSAGE, url: APP_LINK});
    }
  };

  const askLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout ?', [
      {text: 'Cancel', onPress: () => null},
      {
        text: 'OK',
        onPress: () => logoutUser(dispatch),
      },
    ]);
  };

  const renderItem = ({item}) => (
    <TouchableHighlights
      underlayColor={defaultStyles.colors.light}
      style={styles.item}
      onPress={() =>
        item.screen
          ? navigation.navigate(item.screen, {title: item.title})
          : handleClick(item.title)
      }>
      <View style={styles.iconConainer}>
        {<item.icon />}
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <ArrowRight />
    </TouchableHighlights>
  );

  return (
    <ScreenContainer>
      <FlatList
        data={options}
        ListHeaderComponent={ProfileSection}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 9,
    marginVertical: 8,
    marginHorizontal: 24,
  },
  iconConainer: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 17,
    marginLeft: 24,
  },
});

const OPTIONS = [
  {title: 'Test Records', icon: TestRecord, screen: 'RecordsByCourses'},
  {title: 'Change Password', icon: Password, screen: 'ChangePassword'},
  {title: 'My Notes', icon: Notes, screen: 'MyNotes'},
  {title: 'Payment History', icon: Payment, screen: 'PaymentHistory'},
  {title: 'Help & Support', icon: Support, screen: 'HelpAndSupport'},
  {title: 'Logout', icon: Logout, screen: ''},
  {title: 'Privacy', icon: Support, screen: ''},
  {title: 'Share App', icon: Support, screen: ''},
];

const WITHOUT_SINGIN = [
  {title: 'Test Records', icon: TestRecord, screen: 'RecordsByCourses'},
  {title: 'My Notes', icon: Notes, screen: 'MyNotes'},
  {title: 'Payment History', icon: Payment, screen: 'PaymentHistory'},
  {title: 'Help & Support', icon: Support, screen: 'HelpAndSupport'},
  {title: 'Privacy', icon: Support, screen: ''},
  {title: 'Share App', icon: Support, screen: ''},
];

export default MoreScreen;
