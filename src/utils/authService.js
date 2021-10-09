import {getPurchasedCourses} from '../api/afterPurchase';
import {removeHeader, setHeader} from '../api/client';
import {removeUser, storeAuthDetails, storeUserDetails} from './authStorage';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

const logoutUser = async dispatch => {
  await removeHeader();
  await removeUser();
  dispatch({type: 'paidCourses', payload: []});
  await dispatch({type: 'auth', payload: false});
};

const loginUser = async (userId, accessToken, fullName, email, dispatch) => {
  await setHeader(userId, accessToken);
  await storeUserDetails(fullName, email);
  await storeAuthDetails(userId, accessToken);
  const {data} = await getPurchasedCourses();
  if (data.response == 100 && data.course.length >= 1) {
    const courses = data.course;
    dispatch({type: 'paidCourses', payload: courses});

    // configure Notification
    for (var i = 0; i < courses.length; i++) {
      await messaging().subscribeToTopic(`course_id_${courses[i].course_id}`);
    }
    PushNotification.createChannel({
      channelId: 'edua-local',
      channelName: 'Edua',
    });
    await messaging().subscribeToTopic('example');
    
  }

  await dispatch({type: 'auth', payload: true});
};

export {loginUser, logoutUser};
