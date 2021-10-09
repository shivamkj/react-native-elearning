import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import {navigationRef} from './rootNavigator';
import {navigate} from './functions';

const configureFirebaseNotif = () => {
  messaging().onMessage(async remoteMessage => {
    const {
      notification: {title, body},
      data,
    } = remoteMessage;

    PushNotification.localNotification({
      channelId: 'edua-local',
      title,
      message: body,
      userInfo: data,
    });
    console.log('A new FCM message arrived!');
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('onNotificationOpenedApp');
    if (navigationRef.isReady()) navigate(remoteMessage.data, navigationRef);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log('Initial Message: ');
        if (navigationRef.isReady())
          navigate(remoteMessage.data, navigationRef);
      }
    });

  // if (Platform.OS == 'ios') _checkPermission();
};

const configureLocalNotif = () => {
  console.log('config');
  
  PushNotification.configure({
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      if (navigationRef.isReady()) navigate(notification.data, navigationRef);
    },
    requestPermissions: Platform.OS === 'ios',
  });

  // messaging().setBackgroundMessageHandler(remoteMessage => {
  //   console.log('Message handled in the background!');
  // });
};

// const _checkPermission = async () => {
//   const enabled = await messaging().hasPermission();
//   if (!enabled) _requestPermission();
// };

// const _requestPermission = async () => {
//   console.log('requesting permission');
//   try {
//     await messaging().requestPermission();
//     getToken();
//   } catch (err) {
//     console.log(err);
//   }
// };

export {configureFirebaseNotif, configureLocalNotif};
