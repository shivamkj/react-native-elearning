import messaging from '@react-native-firebase/messaging';
import {Platform} from 'react-native';
import PushNotification from 'react-native-push-notification';
import {navigate} from './RootNavigator';

const configureNotification = () => {
  messaging().onMessage(async remoteMessage => {
    const {
      notification: {title, body},
      data,
    } = remoteMessage;

    setLocalNotification(title, body, data);
    console.log('A new FCM message arrived!');
  });

  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('onNotificationOpenedApp: ');
    openResourceScreen(remoteMessage.data);
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log('Initial Message: ');
        openResourceScreen(remoteMessage.data);
      }
    });

  PushNotification.configure({
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
      openResourceScreen(notification.data);
    },
    requestPermissions: Platform.OS === 'ios',
  });

  // if (Platform.OS == 'ios') _checkPermission();
  // isNotificationConfigured = true;
};

const setBackgroundNotification = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!');
  });
};

const setLocalNotification = (title, message, data) =>
  PushNotification.localNotification({
    channelId: "firebase",
    title,
    message,
    userInfo: data,
  });

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

const openResourceScreen = ({type, ...info}) => {
  switch (parseInt(type)) {
    case 0:
      navigate('PdfViewer', info);
      break;
    case 1:
      navigate('VideoPlayer', info);
      break;
    case 2:
      navigate('TestInstruction', info);
      break;
    case 3:
      navigate('LiveStream', info);
      break;
  }
};

export {configureNotification, setBackgroundNotification};
